import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Dropdown pointing='top right' text="Taha">
          <Dropdown.Menu >
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  )
}
