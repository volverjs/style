---
title: Default
wrapperClass: flex-1 flex flex-col gap-lg items-center
---

<div class="vv-input-otp" role="group" aria-label="Verification code">
    <div class="vv-input-otp__group">
        <input class="vv-input-otp__slot" type="text" inputmode="numeric" maxlength="1" autocomplete="one-time-code" aria-label="Digit 1" value="4" />
        <input class="vv-input-otp__slot" type="text" inputmode="numeric" maxlength="1" aria-label="Digit 2" value="2" />
        <input class="vv-input-otp__slot" type="text" inputmode="numeric" maxlength="1" aria-label="Digit 3" />
    </div>
    <span class="vv-input-otp__separator" aria-hidden="true">–</span>
    <div class="vv-input-otp__group">
        <input class="vv-input-otp__slot" type="text" inputmode="numeric" maxlength="1" aria-label="Digit 4" />
        <input class="vv-input-otp__slot" type="text" inputmode="numeric" maxlength="1" aria-label="Digit 5" />
        <input class="vv-input-otp__slot" type="text" inputmode="numeric" maxlength="1" aria-label="Digit 6" />
    </div>
</div>

<div class="vv-input-otp vv-input-otp--invalid" role="group" aria-label="Refused code">
    <div class="vv-input-otp__group">
        <input class="vv-input-otp__slot" type="text" inputmode="numeric" maxlength="1" aria-label="Digit 1" aria-invalid="true" value="9" />
        <input class="vv-input-otp__slot" type="text" inputmode="numeric" maxlength="1" aria-label="Digit 2" aria-invalid="true" value="9" />
        <input class="vv-input-otp__slot" type="text" inputmode="numeric" maxlength="1" aria-label="Digit 3" aria-invalid="true" value="9" />
    </div>
</div>
