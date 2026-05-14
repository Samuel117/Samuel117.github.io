function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'sans-serif', lineHeight: '1.7' }}>
      <h1>Política de Privacidad — Sistema de Gestión de Bienhechores</h1>
      <p><em>Última actualización: mayo 2026</em></p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        Este sistema es desarrollado y operado por Samuel Padilla en nombre del Seminario.
        Para consultas relacionadas con privacidad:{' '}
        <a href="mailto:samuel.padilla45@gmail.com">samuel.padilla45@gmail.com</a>
      </p>

      <h2>2. Datos que recopilamos</h2>
      <p>El sistema almacena los siguientes datos de los bienhechores del Seminario:</p>
      <ul>
        <li>Nombre completo</li>
        <li>Número de teléfono (WhatsApp)</li>
        <li>Correo electrónico (opcional)</li>
        <li>Historial de aportaciones y estatus de pago</li>
        <li>Historial de mensajes enviados vía WhatsApp</li>
      </ul>

      <h2>3. Finalidad del tratamiento</h2>
      <p>Los datos se utilizan exclusivamente para:</p>
      <ul>
        <li>Gestión interna de donadores del Seminario</li>
        <li>Envío de comunicaciones vía WhatsApp Business API (recordatorios, agradecimientos, avisos)</li>
        <li>Seguimiento de aportaciones</li>
      </ul>

      <h2>4. Compartición de datos</h2>
      <p>
        Los datos no se venden, alquilan ni comparten con terceros. El único servicio externo
        utilizado es la WhatsApp Business API de Meta, necesaria para el envío de mensajes,
        sujeta a la{' '}
        <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noreferrer">
          Política de Privacidad de Meta
        </a>.
      </p>

      <h2>5. Retención de datos</h2>
      <p>
        Los datos se conservan mientras el bienhechor esté activo en el sistema. A solicitud
        del Seminario o del titular, los datos pueden ser eliminados.
      </p>

      <h2>6. Derechos del titular</h2>
      <p>
        Cualquier persona cuyos datos estén en el sistema puede solicitar acceso, corrección
        o eliminación contactando a:{' '}
        <a href="mailto:samuel.padilla45@gmail.com">samuel.padilla45@gmail.com</a>
      </p>

      <h2>7. Seguridad</h2>
      <p>
        El sistema implementa medidas de seguridad estándar para proteger los datos almacenados
        contra acceso no autorizado.
      </p>
    </div>
  )
}

export default PrivacyPolicy
