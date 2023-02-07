import React from "react";
import styles from './Contact.module.css';
function Contact(){
    return (
        <div className={styles.layout}>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
            <div className={styles.contactInfo}>
                <a href="tel:111-111-1111">111-111-1111</a>
                <a href="mailto:email@email.com">email@email.com</a>
            </div>
        </div>
    )
}

export default Contact;