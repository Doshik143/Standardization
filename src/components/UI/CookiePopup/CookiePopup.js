import React, { useState } from "react";
import CookieConsent from "react-cookie-consent";
import styled from "styled-components";
import Button from "../Button/Button";

const CookiePopup = () => {
  const [showSettings, setShowSettings] = useState(false);

  const handleAcceptAll = () => {
    console.log("Cookies accepted");
    localStorage.setItem("cookiesAccepted", "true");
    localStorage.setItem(
      "cookiesSettings",
      JSON.stringify({
        necessary: true,
        analytics: true,
        preferences: true,
      }),
    );
  };

  const handleDecline = () => {
    console.log("Only necessary cookies");
    localStorage.setItem("cookiesAccepted", "false");
    localStorage.setItem(
      "cookiesSettings",
      JSON.stringify({
        necessary: true,
        analytics: false,
        preferences: false,
      }),
    );
  };

  const handleSaveSettings = (settings) => {
    localStorage.setItem("cookiesSettings", JSON.stringify(settings));
    setShowSettings(false);
  };

  const [hasConsent] = useState(
    localStorage.getItem("cookiesAccepted") !== null,
  );

  if (hasConsent) return null;

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Прийняти всі"
        declineButtonText="Тільки необхідні"
        enableDeclineButton
        onAccept={handleAcceptAll}
        onDecline={handleDecline}
        style={{
          background: "rgba(0, 0, 0, 0.9)",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "15px 30px",
          zIndex: 9999,
        }}
        buttonStyle={{
          background: "#4CAF50",
          color: "white",
          fontSize: "14px",
          borderRadius: "5px",
          padding: "10px 20px",
          margin: "0 10px",
          cursor: "pointer",
          border: "none",
        }}
        declineButtonStyle={{
          background: "transparent",
          color: "#ccc",
          fontSize: "14px",
          borderRadius: "5px",
          padding: "10px 20px",
          margin: "0 10px",
          cursor: "pointer",
          border: "1px solid #666",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <strong style={{ fontSize: "16px", color: "#fff" }}>
              🍪 Ми використовуємо cookies
            </strong>
            <p
              style={{
                margin: "5px 0 0",
                fontSize: "14px",
                color: "#ccc",
                maxWidth: "600px",
              }}
            >
              Цей сайт використовує cookies для покращення роботи, аналітики та
              збереження ваших налаштувань. Ви можете налаштувати їх на свій
              розсуд.
            </p>
            <p>
              <a
                href="/PRIVACY.md"
                style={{ color: "#ccc", marginRight: "15px" }}
              >
                Політика конфіденційності
              </a>
              <a href="/EULA.md" style={{ color: "#ccc" }}>
                Умови використання
              </a>
            </p>
          </div>
          <Button
            variant="secondary"
            onClick={() => setShowSettings(true)}
            style={{ background: "transparent", border: "1px solid #4CAF50" }}
          >
            Налаштувати
          </Button>
        </div>
      </CookieConsent>

      {showSettings && (
        <CookieSettings
          onClose={() => setShowSettings(false)}
          onSave={handleSaveSettings}
        />
      )}
    </>
  );
};

const CookieSettings = ({ onClose, onSave }) => {
  const [settings, setSettings] = useState({
    necessary: true,
    analytics: false,
    preferences: false,
  });

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h3>Налаштування cookies</h3>

        <div style={{ margin: "20px 0" }}>
          <CookieOption>
            <div>
              <strong>Необхідні cookies</strong>
              <p>Потрібні для роботи сайту. Не можуть бути вимкнені.</p>
            </div>
            <input type="checkbox" checked disabled />
          </CookieOption>

          <CookieOption>
            <div>
              <strong>Аналітичні cookies</strong>
              <p>
                Допомагають нам покращувати сайт, збираючи анонімну статистику.
              </p>
            </div>
            <input
              type="checkbox"
              checked={settings.analytics}
              onChange={(e) =>
                setSettings({ ...settings, analytics: e.target.checked })
              }
            />
          </CookieOption>

          <CookieOption>
            <div>
              <strong>Cookies налаштувань</strong>
              <p>
                Запам'ятовують ваші вподобання (складність гри, тип керування).
              </p>
            </div>
            <input
              type="checkbox"
              checked={settings.preferences}
              onChange={(e) =>
                setSettings({ ...settings, preferences: e.target.checked })
              }
            />
          </CookieOption>
        </div>

        <div
          style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}
        >
          <Button variant="secondary" onClick={onClose}>
            Скасувати
          </Button>
          <Button variant="primary" onClick={() => onSave(settings)}>
            Зберегти
          </Button>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  color: #333;
`;

const CookieOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #eee;

  p {
    margin: 5px 0 0;
    font-size: 13px;
    color: #666;
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;

export default CookiePopup;
