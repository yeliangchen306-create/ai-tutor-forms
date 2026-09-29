"use strict";

const dialog = document.querySelector("#feedback-dialog");
const message = document.querySelector("#feedback-message");

document.querySelectorAll("[data-toggle-password]").forEach((button) => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.togglePassword);
    const isVisible = input.type === "text";
    input.type = isVisible ? "password" : "text";
    button.textContent = isVisible ? "显示" : "隐藏";
    button.setAttribute("aria-label", isVisible ? "显示密码" : "隐藏密码");
    button.setAttribute("aria-pressed", String(!isVisible));
  });
});

function showFeedback(text) {
  message.textContent = text;
  dialog.showModal();
}

const loginForm = document.querySelector("#login-form");
if (loginForm) {
  const emailInput = document.querySelector("#login-email");
  const rememberInput = loginForm.elements.remember;
  try {
    const savedEmail = localStorage.getItem("zhiwen.rememberedEmail");
    if (savedEmail) {
      emailInput.value = savedEmail;
      rememberInput.checked = true;
    }
  } catch (_) {
    // The form remains usable when browser storage is unavailable.
  }
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      if (rememberInput.checked) localStorage.setItem("zhiwen.rememberedEmail", emailInput.value);
      else localStorage.removeItem("zhiwen.rememberedEmail");
    } catch (_) {
      // Email convenience is optional; passwords are never persisted.
    }
    showFeedback("登录信息格式正确。当前是前端演示，尚未连接账号服务，也不会验证或保存密码。");
  });
}

const registerForm = document.querySelector("#register-form");
if (registerForm) {
  const password = document.querySelector("#register-password");
  const confirmation = document.querySelector("#confirm-password");
  const strength = document.querySelector("#password-strength");

  function validatePassword() {
    const value = password.value;
    password.setCustomValidity(value && (!/[A-Za-z]/.test(value) || !/\d/.test(value)) ? "密码需同时包含字母和数字" : "");
    confirmation.setCustomValidity(confirmation.value && confirmation.value !== value ? "两次输入的密码不一致" : "");
    strength.value = !value ? 0 : Math.min(4,
      Number(value.length >= 8) + Number(value.length >= 12) +
      Number(/[A-Za-z]/.test(value) && /\d/.test(value)) + Number(/[^A-Za-z\d]/.test(value)));
  }

  password.addEventListener("input", validatePassword);
  confirmation.addEventListener("input", validatePassword);

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    validatePassword();
    if (!registerForm.reportValidity()) return;
    const name = document.querySelector("#display-name").value.trim();
    showFeedback(`${name}，资料格式已通过校验。当前是前端演示，尚未创建真实账号，也不会保存密码。`);
  });
}
