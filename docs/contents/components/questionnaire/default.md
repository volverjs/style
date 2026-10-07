---
title: Default
wrapperClass: flex-1
---

<form class="vv-questionnaire" style="--questionnaire-progress: 40%;">
    <h3 class="vv-questionnaire__header">Delivery preferences</h3>
    <div class="vv-questionnaire__progress" role="progressbar" aria-label="Step 2 of 5" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="vv-questionnaire__item">
        <fieldset class="vv-radio-group vv-radio-group--cards" aria-describedby="questionnaire-description">
            <legend class="vv-questionnaire__title">How should we send the invoice?</legend>
            <p id="questionnaire-description" class="vv-questionnaire__description">You can change it later in the settings.</p>
            <div class="vv-radio-group__wrapper">
                <label class="vv-radio vv-radio--card">
                    <input type="radio" name="questionnaire-channel" value="email" checked="checked" />
                    <span>By email</span>
                </label>
                <label class="vv-radio vv-radio--card">
                    <input type="radio" name="questionnaire-channel" value="chat" />
                    <span>In this chat</span>
                </label>
            </div>
        </fieldset>
    </div>
    <div class="vv-questionnaire__actions">
        <button type="button" class="vv-button vv-button--action-quiet">Back</button>
        <button type="button" class="vv-button vv-button--action-quiet">Skip</button>
        <button type="submit" class="vv-button">Next</button>
    </div>
</form>
