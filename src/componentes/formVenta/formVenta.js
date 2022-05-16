import React, { useState } from 'react';
import './formVenta.css';

const FormVenta = ({ finishBuy }) => {
    
    const [form, setForm] = useState({
        name: '',
        apellido: '',
        email: '',
        phone: '',
        emailConfirmation: '', 
    })

    const getContactData = (e) => {
        const { name, value } = e.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
    }

    const finishPurchase = () => {
        const { name, email, phone, apellido } = form
        finishBuy({ name, email, phone, apellido });
    }

    const disabled = !(
        form.email.length &&
        form.name.length &&
        form.emailConfirmation.length &&
        form.phone.length > 0 &&
        form.email === form.emailConfirmation &&
        form.apellido.length > 0
    )

    return (
        <div className='formContainer'>
            <h1>Ultimos pasos: </h1>
            <form className='datosComprador'>
                <label  htmlFor="name" className='dataForm'>Nombre:</label>
                <input placeholder="Nombre" name="name" value={form.name} onChange={getContactData} type="text"/>
                <label  htmlFor="lastName" className='dataForm'>Apellido:</label>
                <input placeholder="Apellido" name="apellido" value={form.apellido} onChange={getContactData} type="text"/>
                <label htmlFor="email" className='dataForm'>E-mail:</label>
                <input placeholder="E-mail" name="email" value={form.email} onChange={getContactData} type="email"/>
                <label htmlFor="email" className='dataForm'>Confirmación E-mail:</label>
                <input placeholder="Confirmar E-mail" name="emailConfirmation" value={form.emailConfirmation} onChange={getContactData} type="email"/>
                <label htmlFor="phone" className='dataForm'>Telefono:</label>
                <input placeholder="Teléfono" name="phone" value={form.phone} onChange={getContactData} type="text"/>
                
            </form>
            <button type="submit" disabled={disabled} onClick={finishPurchase}>Pagar</button>
        </div>
    )
}

export default FormVenta;