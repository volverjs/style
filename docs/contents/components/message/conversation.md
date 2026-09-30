---
title: Conversation
wrapperClass: flex-1
---

<div class="vv-message-scroller h-384 p-md" role="log" aria-live="polite">
    <div class="vv-separator"><span>Yesterday</span></div>
    <div class="vv-message">
        <span class="vv-avatar vv-avatar--rounded vv-avatar--surface vv-message__avatar">AI</span>
        <div class="vv-message__content">
            <div class="vv-message__header"><strong>Assistant</strong><span class="vv-message__meta">10:42</span></div>
            <div class="vv-bubble-group">
                <div class="vv-bubble">Hi! How can I help you today?</div>
                <div class="vv-bubble vv-bubble--reacted">
                    I can look up invoices, orders and deliveries.
                    <span class="vv-bubble__reactions" role="img" aria-label="2 people liked this">👍 2</span>
                </div>
            </div>
        </div>
    </div>
    <div class="vv-message vv-message--end">
        <div class="vv-message__content">
            <div class="vv-bubble-group vv-bubble-group--end">
                <div class="vv-bubble vv-bubble--end">I need a copy of the March invoice.</div>
                <div class="vv-bubble vv-bubble--end">The one for the Milan office.</div>
            </div>
            <div class="vv-message__footer"><span>Read</span></div>
        </div>
    </div>
    <div class="vv-marker"><span class="vv-marker__content">Maria joined the conversation</span></div>
    <div class="vv-message vv-message--wide">
        <div class="vv-message__content">
            <div class="vv-bubble vv-bubble--plain">
                <div class="vv-prose">
                    <p>Here is the <strong>March invoice</strong> for Milan:</p>
                    <ul>
                        <li>Number 2026/118</li>
                        <li>Total € 1,240</li>
                    </ul>
                </div>
            </div>
            <div class="vv-message__footer">
                <button type="button" class="vv-button vv-button--action-quiet vv-button--icon-only" aria-label="Copy">
                    <IconifyIcon icon="akar-icons:copy" />
                </button>
                <span class="vv-message__meta">120 tokens · 0.8 s</span>
            </div>
        </div>
    </div>
    <button type="button" class="vv-message-scroller__jump" aria-label="Go to the latest message">
        <IconifyIcon icon="akar-icons:arrow-down" />
    </button>
</div>
