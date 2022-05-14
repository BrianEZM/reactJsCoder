import React, { useState } from 'react';
// import './FormularioCompra.css';

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
        <div className='FormVenta'>
            <h1>Ultimo pasos: </h1>
            <form className='FormVentaCompra'>
                <label  htmlFor="name" className='labelForm'>Nombre:</label>
                <input placeholder="Juan" name="name" value={form.name} onChange={getContactData} type="text"/>
                <label  htmlFor="apellido" className='labelForm'>Apellido:</label>
                <input placeholder="Perez" name="apellido" value={form.apellido} onChange={getContactData} type="text"/>
                <label htmlFor="email" className='labelForm'>E-mail:</label>
                <input placeholder="Email" name="email" value={form.email} onChange={getContactData} type="email"/>
                <label htmlFor="phone" className='labelForm'>Telefono:</label>
                <input placeholder="Teléfono" name="phone" value={form.phone} onChange={getContactData} type="text"/>
                <label htmlFor="email" className='labelForm'>Confirmación E-mail:</label>
                <input placeholder="Confirma Email" name="emailConfirmation" value={form.emailConfirmation} onChange={getContactData} type="email"/>
            </form>
            <button type="submit" className='btnCarrito btnPagar' disabled={disabled} onClick={finishPurchase}>Pagar</button>
        </div>
    )
}

export default FormVenta;