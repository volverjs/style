---
title: Default
wrapperClass: flex-1 flex justify-center
---

<div class="vv-calendar">
    <div class="vv-calendar__header">
        <button type="button" class="vv-calendar__nav" aria-label="Previous month"><IconifyIcon icon="akar-icons:chevron-left" /></button>
        <span class="vv-calendar__title" id="calendar-title">September 2026</span>
        <button type="button" class="vv-calendar__nav" aria-label="Next month"><IconifyIcon icon="akar-icons:chevron-right" /></button>
    </div>
    <table class="vv-calendar__grid" role="grid" aria-labelledby="calendar-title">
        <thead>
            <tr>
                <th scope="col" abbr="Monday">Mo</th>
                <th scope="col" abbr="Tuesday">Tu</th>
                <th scope="col" abbr="Wednesday">We</th>
                <th scope="col" abbr="Thursday">Th</th>
                <th scope="col" abbr="Friday">Fr</th>
                <th scope="col" abbr="Saturday">Sa</th>
                <th scope="col" abbr="Sunday">Su</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">1</button></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">2</button></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">3</button></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">4</button></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">5</button></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">6</button></td>
            </tr>
            <tr>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">7</button></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">8</button></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">9</button></td>
                <td aria-selected="true"><button type="button" class="vv-calendar__day" tabindex="0" aria-pressed="true">10</button></td>
                <td aria-selected="true"><button type="button" class="vv-calendar__day" tabindex="-1">11</button></td>
                <td aria-selected="true"><button type="button" class="vv-calendar__day" tabindex="-1">12</button></td>
                <td aria-selected="true"><button type="button" class="vv-calendar__day" tabindex="-1">13</button></td>
            </tr>
            <tr>
                <td aria-selected="true"><button type="button" class="vv-calendar__day" tabindex="-1">14</button></td>
                <td aria-selected="true"><button type="button" class="vv-calendar__day" tabindex="-1" aria-pressed="true">15</button></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">16</button></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">17</button></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">18</button></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">19</button></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">20</button></td>
            </tr>
            <tr>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">21</button></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">22</button></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">23</button></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1" aria-current="date">24</button></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">25</button></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">26</button></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">27</button></td>
            </tr>
            <tr>
                <td><button type="button" class="vv-calendar__day" tabindex="-1" disabled="disabled">28</button></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">29</button></td>
                <td><button type="button" class="vv-calendar__day" tabindex="-1">30</button></td>
            </tr>
        </tbody>
    </table>
</div>
