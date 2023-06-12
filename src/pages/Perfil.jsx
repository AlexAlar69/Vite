import React from "react";
import { Container, Card } from 'react-bootstrap';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../estilos/Perfil.css";
import "../estilos/Pages.css";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const cookie = new Cookies();


function Perfil() {
  const navigate = new useNavigate();
  useEffect(() => {
    if (!cookie.get('nombres')) {
      navigate('/Iniciar-sesion')
    }
  }, []);

  const datos = {
    nombre: cookie.get('nombres'),
    apellidos: cookie.get('apellidos'),
    matricula: cookie.get('matricula'),
    email: cookie.get('email'),
    centro: cookie.get('centro_trabajo')

  }


  return (
    <>

      {/* Barra de titulo */}
      <div className="barContains">
        <div className="bar">
          <span className="display-3"><b>Perfil de Usuario</b></span>
        </div>
      </div>

      {/* Header SideBar */}
      <div style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader className="side_head" prefix={<i className="fa fa-bars fa-large"></i>}>
            <p className='header_text'>Menú</p>
          </CDBSidebarHeader>

      {/* Contenido SideBar */}
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="" activeClassName="activeClicked">
                <CDBSidebarMenuItem className='icon' icon="user">Información</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="" activeClassName="activeClicked">
                <CDBSidebarMenuItem className='icon' icon="star">Retroalimentacion</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="" activeClassName="activeClicked">
                <CDBSidebarMenuItem className='icon' icon="cog">Configuracion</CDBSidebarMenuItem>
              </NavLink>

            </CDBSidebarMenu>
          </CDBSidebarContent>

      {/* Footer SideBar */}
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              style={{
                padding: '20px 5px',
              }}
            >
              HAED
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
        <Container>

      {/* Bienvenida al usuario */}
          <div className="row">
            <div className="col">
              <p className="display-6">Bienvenido {datos.nombre}</p>
            </div>
          </div>

      {/* Tarjeta con datos de usuario */}
          <h1>{datos.nombre}</h1>
          <Card>
            <Card.Body>
              <Card.Title>Nombre: John Doe</Card.Title>
              <Card.Text>Correo electrónico: {datos.email}</Card.Text>
              <Card.Text>Edad: 30 años</Card.Text>
              <Card.Text>País: Estados Unidos</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>










    </>
  );
}

export default Perfil;
