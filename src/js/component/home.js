import React, { Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

//create your first component
export class Home extends React.Component {
	// Montaje
	constructor(props) {
		super(props);
		this.state = {
			myText: "hello",
			persona: {
				nombre: "",
				apellido: ""
			},
			isOpen: false
		};
		console.log("constructor");
	}

	// Metodo como constructor y render
	componentDidMount() {
		console.log("componentDidMount");
	}

	render() {
		console.log("render");

		let { persona, isOpen } = this.state;
		console.log(persona, this.state);

		return (
			<Fragment>
				{this.state.myText}
				<div>
					<Button
						color="danger"
						onClick={() => this.setState((isOpen = true))}>
						{" "}
						Abrir
					</Button>

					<Modal isOpen={isOpen} className={" "}>
						<ModalHeader>Modal title</ModalHeader>
						<ModalBody>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
						</ModalBody>

						<ModalFooter>
							<Button
								color="primary"
								onClick={() => console.log("Hola Grupo")}>
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
	}
}
