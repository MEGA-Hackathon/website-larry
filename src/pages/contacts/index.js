import Navbar from "components/navbar";
import React from "react";

const ContactsPage = () => {
    return (
        <>
            <Navbar />
            <center>
                <h1>Contacts</h1>
                <h1>Contacts</h1>
                <br />
                <a
                    style={{ textDecoration: "none" }}
                    href="https://www.instagram.com/megahack2022/"
                >
                    Instagram
                </a>
                <br />
                <br />
                <a
                    style={{ textDecoration: "none" }}
                    href="https://discord.gg/WQnppYbKrh"
                >
                    Discord Server
                </a>
                <br />
                <br />
                <a
                    style={{ textDecoration: "none" }}
                    href="mailto:info@megahack.tech"
                >
                    Email (info@megahack.tech)
                </a>
            </center>
        </>
    );
};

export default ContactsPage;
