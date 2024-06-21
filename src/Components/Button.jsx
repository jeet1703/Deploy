    import React from 'react'

    const Button = ({ className, href, onClick, children, px }) => {
        const classes = `mt-8 py-3 ${px || "px-6"} bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-xl hover:from-pink-600 hover:to-purple-500  ${className || ""}`;
        const spanClasses = "relative z-10";

        const renderButton = () => (
            <button className={classes} onClick={onClick}>
            <span className={spanClasses}>{children}</span>
            </button>
        );

        const renderLink = () => (
            <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
            </a>
        );
    return href ? renderLink() : renderButton();
    }

    export default Button