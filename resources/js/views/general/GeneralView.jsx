import React, { useState } from "react";
import Input from "../../components/ui/Input/Input"
import Button from "../../components/ui/Button/Button"
import classes from "./../../styles/views/general.module.scss";

const GeneralView = () => {
    const [value, setValue] = useState({})

    const sendValue = () => {
        console.log('sending...');
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapper__inner}>
                <div>Вход в систему</div>
                <div>
                    <Input
                        value={value}
                        setValue={setValue}
                        name="login"
                        type="text"
                    />
                    <Input
                        value={value}
                        setValue={setValue}
                        name="password"
                        type="password"
                    />
                </div>
                <div>
                    <Button
                        text="Войти"
                        onClick={sendValue}
                    />
                </div>
            </div>
        </div>
    )
}

export default GeneralView