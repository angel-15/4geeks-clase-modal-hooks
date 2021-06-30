import React, { Fragment, useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

//create your first component
export const Home2 = () => {
	const [persona, setPersona] = useState({ nombre: "", apellido: "" });
	const [isOpen, setIsOpen] = useState(false);
	const [lista, setLista] = useState([]);
	const mensaje = () =>
		setTimeout(
			() =>
				setLista(["Primer Nombre", "Segundo Nombre", "Tercer Nombre"]),
			3000
		);

	useEffect(() => {
		// MONTAJE, SOLO SE EJECUTA 1 VEZ, COMO MUCHO 2 VECES POR EL RE-RENDER DE REACT
		mensaje();
		// ACTUALIZACIÓN, SE EJECUTA MULTIPLES VECES
		console.log("Ahora Open es:", isOpen);
	}, [isOpen]); // dentro de [] fase de actualización
	return (
		<Fragment>
			<div>
				<Button color="danger" onClick={() => setIsOpen(true)}>
					{" "}
					Abrir
				</Button>

				{lista.length ? (
					<ul>
						{" "}
						{lista.map(palabra => (
							<li> {palabra} </li>
						))}{" "}
					</ul>
				) : (
					<h2>Cargando</h2>
				)}

				<Modal isOpen={isOpen} className={" "}>
					<ModalHeader>Modal title</ModalHeader>
					<ModalBody>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis
						nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</ModalBody>

					<ModalFooter>
						<Button
							color="primary"
							onClick={() => setIsOpen(false)}>
							Do Something
						</Button>{" "}
						<Button
							color="secondary"
							onClick={() => console.log("Hola Grupo")}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		</Fragment>
	);
};
