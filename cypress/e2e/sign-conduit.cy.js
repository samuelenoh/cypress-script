/// <reference types="cypress" />

const { signUp } = require("./conduit-pages.cy")

const access1 = new signUp
it(' ',()=>{
    // access1.sgnUp()
    access1.login()
    access1.newPost(
        access1.profile()
    )
})