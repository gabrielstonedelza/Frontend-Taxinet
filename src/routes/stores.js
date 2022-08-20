import { writable } from 'svelte/store';
import { browser } from '$app/env'
import Cookies from 'js-cookie'

Cookies.get("token")

export const token = writable(browser && (localStorage.getItem('token')) || Cookies.get("token"))

token.subscribe(val => browser && localStorage.setItem("token", val));