import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export default function Categories() {
  return (
    <div>
      <Menu  vertical>
        <Menu.Item as={NavLink} to="/employers"
          name='Şirketler'
        />
        <Menu.Item as={NavLink} to="/jobseekers"
          name='İş Arayanlar'
        />
        <Menu.Item as={NavLink} to="/"
          name='Iş Ilanları'
        />
        <Menu.Item as={NavLink} to="/jobseeker/add"
          name='Bireysel Üye Kayıt'
        />
        <Menu.Item as={NavLink} to="/employer/add"
          name='Kurumsal Üye Kayıt'
        />
        <Menu.Item as={NavLink} to="/jobposting/add"
          name='İş İlanı Ekle'
        />
        <Menu.Item as={NavLink} to="/jobposition/add"
          name='İş Pozisyonu Ekle'
        />
        <Menu.Item as={NavLink} to="/deletablejoblist"
          name='Silinebilir İlan Sayfası'
        />
      </Menu>
    </div>
  )
}
