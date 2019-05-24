import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button
} from 'react-native';

class Form extends Component {
	state = {
		fields: (this.props.fields || []).map(field => {
			const _field = {
				...field,
				validationRules: field.validationRules || {},
				errorMessages: field.errorMessages || {},
				isTouched: false,
				hasError: {}
			};
			if(field.type === 'password' || field.type === 'confirmPassword') {
				_field.secureTextEntry = true
			}
			return _field;
		}),
		isFormPristine: true,
		isFormHasError: false
	};

	handleFieldChange = (value, type) => {
		const { fields } = this.state;
		let isFormHasError = false;

		const updatedFields = fields.map(field => {
			if (field.type !== type) {
				return field;
			}

			if(field.validationRules.required) {
				field.hasError['required'] = isFormHasError = !value;
			}
			if(field.validationRules.pattern) {
				field.hasError['pattern'] = isFormHasError = !(field.validationRules.pattern.test(value));
			}
			if(field.validationRules.minLength) {
				field.hasError['minLength'] = isFormHasError = (value.length < field.validationRules.minLength);
			}

			return {
				...field,
				isTouched: true,
				value
			};
		});
		this.setState({fields: updatedFields, isFormHasError, isFormPristine: false});
	};

	handleSubmit = () => {
		const { fields } = this.state;
		const formData = {};
		for(let i=0; i<fields.length; i++) {
			const field = fields[i];
			formData[field.type] = field.value
		};

		this.props.onSubmit(formData);
	};

	render() {
		const { fields, isFormPristine, isFormHasError } = this.state;

		return (
			<View style={styles.container}>
				{fields.map((field, i) => {
					const fieldHasError = Object.keys(field.hasError).filter(err => field.hasError[err]).length > 0;

					return (
						<View key={i} style={styles.fieldWrapper}>
							{field.label ? <Text style={styles.label}>{field.label}</Text> : null}
							<TextInput
								style={[styles.field, field.isTouched && fieldHasError && styles.fieldError]}
								underlineColorAndroid="transparent"
								secureTextEntry={field.secureTextEntry}
								onChangeText={value => this.handleFieldChange(value, field.type)}
								value={field.value}
								/>
							{field.isTouched ?
								<View style={styles.fieldErrorWrapper}>
									{field.hasError.required ?
										<Text style={styles.errorText}>{field.errorMessages.required || 'This field is required'}</Text> :
										field.hasError.minLength ?
										<Text style={styles.errorText}>{field.errorMessages.minLength || 'Must be minimum 6 characters'}</Text> :
										field.hasError.pattern ?
										<Text style={styles.errorText}>{field.errorMessages.pattern || 'Not match'}</Text> :
										null
									}
								</View> :
								null
							}
						</View>
					);
				})}
				<Button
					onPress={this.handleSubmit}
					title="Login"
					color="#841584"
					disabled={isFormPristine || isFormHasError}
					/>
			</View>
		);
	}
}

export default Form;

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	fieldWrapper: {
		marginBottom: 10,
	},
	label: {
		fontWeight: '600',
		color: '#5c536b',
		marginBottom: 5,
	},
	field: {
		height: 40,
		paddingHorizontal: 10,
		marginBottom: 3,
		borderColor: '#5c536b',
		borderWidth: 1,
		borderRadius: 3,
	},
	fieldError: {
		borderColor: 'red',
		borderWidth: 1,
	},
	fieldErrorWrapper: {

	},
	errorText: {
		fontSize: 12,
		color: 'red',
	},
});
