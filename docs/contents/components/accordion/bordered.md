---
title: Bordered
wrapperClass: md:w-9/12 mx-auto
---

<div class="flex flex-col gap-md">
    <details id="accordion-item-bordered-1" class="vv-accordion vv-accordion--bordered">
        <summary class="vv-accordion__summary" 
                 aria-controls="#accordion-item-bordered-1" 
                 aria-expanded="false">
            Lorem Ipsum
        </summary>
        <div class="vv-accordion__content" aria-hidden="true">
            <p class="font-light text-word-3">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aenean turpis diam, tempor non
                sem ut, suscipit gravida mi.</p>
        </div>
    </details>
    <details id="accordion-item-bordered-2" class="vv-accordion vv-accordion--bordered">
        <summary class="vv-accordion__summary" 
                 aria-controls="#accordion-item-bordered-2" 
                 aria-expanded="false">
            Lorem Ipsum
        </summary>
        <div class="vv-accordion__content" aria-hidden="true">
            <p class="font-light text-word-3">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aenean turpis diam, tempor non
                sem ut, suscipit gravida mi.</p>
        </div>
    </details>
    <details id="accordion-item-bordered-3" class="vv-accordion vv-accordion--bordered" open="">
        <summary class="vv-accordion__summary" 
                 aria-controls="#accordion-item-bordered-3" 
                 aria-expanded="true">
            Lorem Ipsum
        </summary>
        <div class="vv-accordion__content" aria-hidden="false">
            <p class="font-light text-word-3">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aenean turpis diam, tempor non
                sem ut, suscipit gravida mi.</p>
        </div>
    </details>
</div>