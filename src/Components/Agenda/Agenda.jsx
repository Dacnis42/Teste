import React, { useState } from 'react';
import './Agenda.css'; // Estilos CSS externos

const Agenda = () => {
    const [showIframe, setShowIframe] = useState(false);
    const [showConfirmButton, setShowConfirmButton] = useState(false);

    const handleShowAgendamento = () => {
        setShowIframe(true);
    };

    const handleHideAgendamento = () => {
        setShowIframe(false);
    };

    const handleIframeLoad = () => {
        setShowConfirmButton(true);
    };

    const handleConfirmAgendamento = () => {
        const whatsappNumber = '5571991079314';
        const message = 'Olá, gostaria de confirmar meu agendamento!';
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappUrl;
    };

    return (
        <div className="app-container">
            <h1>Bem-vindo ao Agendamento de Compromissos</h1>
            {!showIframe ? (
                <button className="btn-primary" onClick={handleShowAgendamento}>
                    Marque sua consulta
                </button>
            ) : (
                <>
                    <div className="modal">
                        <div className="modal-content">
                            <iframe
                                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2jUAubh1q9Xp8EmOxvFJphiQ_75XrBUwRXp5A5e7-msWvshB9Lvirtbo8sNG8mgklwo7H1XagZ?gv=true"
                                title="Agendamento de Compromissos"
                                className="iframe-agendamento"
                                onLoad={handleIframeLoad}
                            ></iframe>
                            {showConfirmButton && (
                                <button className="btn-confirm" onClick={handleConfirmAgendamento}>
                                    Ir para o WhatsApp
                                </button>
                            )}
                            <span className="close-modal" onClick={handleHideAgendamento}>
                                ← Voltar
                            </span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Agenda;
