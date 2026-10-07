---
title: Default
wrapperClass: flex-1
---

<div class="vv-prose">
    <h2>Getting started</h2>
    <p>Connect a <a href="#">knowledge base</a> and the assistant answers from its documents. The <strong>first sync</strong> can take a few minutes.</p>
    <ul>
        <li>Pick a folder to index</li>
        <li>Choose how often it syncs
            <ul>
                <li>every hour</li>
                <li>every day</li>
            </ul>
        </li>
        <li>Invite the team</li>
    </ul>
    <blockquote>Answers cite the document they come from.</blockquote>
    <h3>Configuration</h3>
    <p>Set <code>maxTokens</code> to limit the length of an answer, and press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save. The old limit is <del>400</del>, <em>not</em> enforced any more.</p>
<pre><code>{
  "maxTokens": 800,
  "temperature": 0.2
}</code></pre>
    <table>
        <thead><tr><th>Plan</th><th>Documents</th></tr></thead>
        <tbody><tr><td>Starter</td><td>500</td></tr><tr><td>Team</td><td>Unlimited</td></tr></tbody>
    </table>
    <hr />
    <details>
        <summary>How is the cost computed?</summary>
        <p>By the number of tokens read and written.</p>
    </details>
</div>
