/* eslint-disable no-sequences */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { createContext, useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from "react-native-flash-message";
import { useMutation } from '@apollo/client';
import { MUTATION_COLLECTION_STAFF_BOY_LOGIN } from '../Graphql/Mutation';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [check, setCheck] = useState("")

    const [loginError, setLoginError] = useState(false);
    const [userInfo, setUserInfo] = useState();
    const [emptyError, setEmptyError] = useState(false);

    const [breakIf, setBreakIf] = useState(true);

    const [splashLoading, setSplashLoading] = useState(false);

    const [collectionLogin, { data: userData, loading: userLoginLoading }] = useMutation(MUTATION_COLLECTION_STAFF_BOY_LOGIN, {
        onError(error) {
            console.log(error);
            setLoginError(true);
        }
    })

    const loginHandel = async (username, password) => {
        setBreakIf(true)
        Keyboard.dismiss();
        if (username === "" || password === "") {
            showMessage({
                message: "Input Box is empty!!!",
                type: "danger",
            });
        } else {
            collectionLogin({
                variables: {
                    "userName": `${username}`,
                    "password": `${password}`,
                },
            });
        }
    };

    if (userData && breakIf) {
        AsyncStorage.setItem('userId', userData.collectionLogin.collectionId);
        AsyncStorage.setItem('userToken', userData.collectionLogin.collectionToken);
        setUserInfo(userData.collectionLogin.collectionToken);
        setBreakIf(false);
    }

    const isLoggedIn = async () => {
        try {
            setSplashLoading(true);
            let userInfo = await AsyncStorage.getItem('userToken');

            if (userInfo) {
                setUserInfo(userInfo);
            }
            setSplashLoading(false);
        } catch (e) {
            setSplashLoading(false);
        }
    }


    useEffect(() => {
        isLoggedIn();
    }, []);


    const logOut = async () => {
        await setUserInfo();
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('userId');
    }



    return (
        <AuthContext.Provider value={{
            loginHandel,
            check,
            userLoginLoading,
            userInfo,
            loginError,
            logOut,
        }}>
            {children}
        </AuthContext.Provider>
    );
}