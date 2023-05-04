		// Clase Nodo
		class Nodo {
			constructor(valor, izquierda, derecha) {
				this.valor = valor;
				this.izquierda = izquierda;
				this.derecha = derecha;
			}
			peso() {
				if (this.izquierda && this.derecha) {
					return this.valor + this.izquierda.peso() + this.derecha.peso();
				} else if (this.izquierda) {
					return this.valor + this.izquierda.peso();
				} else if (this.derecha) {
					return this.valor + this.derecha.peso();
				} else {
					return this.valor;
				}
			}
		}

		// Función para crear el árbol
		function crearArbol() {
			let nodo1 = new Nodo(5, null, null);
			let nodo2 = new Nodo(3, null, null);
			let nodo3 = new Nodo(2, null, null);
			let nodo4 = new Nodo(7, nodo1, nodo2);
			let nodo5 = new Nodo(4, nodo3, null);
			let nodo6 = new Nodo(6, nodo5, nodo4);
			return nodo6;
		}

		// Función para calcular el peso del árbol
		function pesoArbol(arbol) {
			return arbol.peso();
		}

		// Ejecución del programa
		let arbol = crearArbol();
		let peso = pesoArbol(arbol);
		alert("El peso del árbol es: " + peso);