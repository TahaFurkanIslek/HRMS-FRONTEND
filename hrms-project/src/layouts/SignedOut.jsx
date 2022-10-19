import React from 'react'
import { Button } from 'semantic-ui-react'
export default function SignedOut(props) {
    return (
        <div>
            <Button.Group>
                <Button positive onClick={props.signIn}>Giriş Yap</Button>
                <Button.Or />
                <Button negative>Kayıt Ol</Button>
            </Button.Group>
        </div>
    )
}
