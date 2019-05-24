import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Form from '../components/Form/Form';
import {CssColor, TextColor, ButtonColor} from '../styles/CssColor';
import {connect} from 'react-redux';
import {login} from '../store/actions';

const {width} = Dimensions.get('window');
const FIELDS = [
    {
        type: "email",
        label: "E-mail",
        value: "",
        validationRules: {
            pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            required: true
        },
        errorMessages: {
            pattern: 'Email not math',
            required: "This field is required"
        }
    },
    {
        type: "password",
        label: "Password",
        value: "",
        validationRules: {
            required: true,
            minLength: 6
        },
        errorMessages: {
            required: "This field is required",
            minLength: "Must be minimum 6 characters"
        }
    }
];

class LoginScreen extends Component {
    handleSubmit = data => {
        if(this.props.loading) {
           return
        }

        this.props.onLogin(data);
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.pageHeader}>Login</Text>
                <View style={styles.formWrapper}>
                    <Form fields={FIELDS} onSubmit={this.handleSubmit}/>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        loading: state.auth.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,
        color: TextColor.SMOKY,
    },
    formWrapper: {
        width: width,
        paddingHorizontal: 20,
    },
    loginBtn: {
        backgroundColor: ButtonColor.PICTON_BLUE,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 4,
        width: 0.5*width,
    },
    loginBtnLabel: {
        color: TextColor.WHITE,
        fontSize: 20,
        textAlign: 'center',
    }
});
