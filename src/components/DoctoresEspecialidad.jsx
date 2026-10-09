import axios from "axios";
import Global from "../Global";

import React, { Component } from 'react'

export default class DoctoresEspecialidad extends Component {
    selectEspecialidades = React.createRef();
    url = Global.urlDoctores
    
    state = {
        especialidades: [],
        doctores: [],
    }

    cargarEspecialidades = () => {
        axios.get(this.url + "api/Doctores/Especialidades")
        .then((res) => {
            this.setState({
                especialidades: res.data
            })
        })
    }

    cargarDoctores = (e) => {
        e.preventDefault()

        let especialidad = this.selectEspecialidades.current.value
        let request = 'api/Doctores/DoctoresEspecialidad/' + especialidad

        axios.get(this.url + request)
        .then((res) => {
            this.setState({
                doctores: res.data
            })
        })
    }

    componentDidMount = () => {
        this.cargarEspecialidades()
    }

    render() {
        return (
            <div>
                <h1>Buscador de doctores</h1>

                <form onSubmit={this.cargarDoctores}
                    style={{
                        padding:'10px',
                    }}
                >
                    <label>Seleccione una especialidad</label>
                    <select ref={this.selectEspecialidades}>
                        {
                            this.state.especialidades.map((e,i) => {
                                return (
                                    <option key={i}> {e} </option>
                                )
                            })
                        }
                    </select>
                    <button>Buscar doctores</button>
                </form>

                {
                    this.state.doctores.length > 0 && (
                        <div>
                            <h2>Doctores encontrados</h2>

                            <table>
                                <thead>
                                    <tr>
                                        <th style={{
                                            padding: '5px'
                                        }}>
                                            Apellido
                                        </th>

                                        <th style={{
                                            padding: '5px'
                                        }}>
                                            Especialidad
                                        </th>

                                        <th style={{
                                            padding: '5px'
                                        }}>
                                            Salario
                                        </th>

                                        <th style={{
                                            padding: '5px'
                                        }}>
                                            Hospital
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.doctores.map((doc, i) => {
                                        return (
                                            <tr key={i}>
                                                <td style={{
                                                    padding: '5px'
                                                }}>
                                                    {doc.apellido}
                                                </td>

                                                <td style={{
                                                    padding: '5px'
                                                }}>
                                                    Especialidad: {doc.especialidad}
                                                </td>

                                                <td style={{
                                                    padding: '5px'
                                                }}>
                                                    Salario: {doc.salario}
                                                </td>

                                                <td style={{
                                                    padding: '5px'
                                                }}>
                                                    Hospital: {doc.idHospital}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )
                }
            </div>
        )
    }
}
