import {css} from 'lit'

const lineColorsStyles = css`
    .line-icon {
        border-radius: 12px;
        padding: 2px 8px;
        color: #fff;
        min-width: 28px;
        height: 20px;
        font-weight: 600;
        font-size: 11px;
        line-height: 20px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    }

    .bus {
        border: 1px solid var(--outline-color);
        color: var(--primary-text-color);
    }

    .red {
        background-color: #DA291C;
    }
    .blue {
        background-color: #0072C6;
    }
    .green {
        background-color: #009B48;
    }

    .train {
        background-color: #EC619F;
    }

    .tram {
        background-color: #985141;
    }

    .tram_7 {
        background-color: #878a83;
    }

    .tram_12 {
        background-color: #778da7;
    }

    .tram_21 {
        background-color: #b76020;
    }

    .tram_22 {
        background-color: #d77d00;
    }
    `

const departureEntityStyles = css`
    .card-header .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .departures > :first-child {
        margin-top: 0;
    }

    .departure.departed {
        color: var(--secondary-text-color);
    }

    .departure.departed > .main {
        text-decoration: line-through;
    }

    .row {
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
    }

    .row.departure {
        padding: 6px 10px;
        margin: 0 -10px;
        border-radius: 8px;
        align-items: center;
        transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
    }

    .row.departure:hover {
        background-color: var(--hover-color, rgba(255, 255, 255, 0.04));
        transform: translateX(3px);
    }

    .col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
    }

    .col.icon {
        flex-basis: 40px;
    }

    .row.name {
        height: 40px;
        padding-left: 8px;
        font-weight: 400;
        font-size: large;
        align-items: center;
        justify-content: center;
    }
    .row.header {
        height: 40px;
        font-size: medium;
        font-weight: 400;
        font-family: var(--paper-font-headline_-_font-family);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
        line-height: var(--paper-font-headline_-_line-height);
        text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);
        opacity: var(--dark-primary-opacity);
    }

    .main {
        flex: 2;
    }

    .transport-icon {
        width: 40px;
        height: 40px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .warning {
        color: var(--warning-color);
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .warning-message {
        display: block;
        color: var(--warning-color, #ff9800);
        font-size: 11px;
        margin-top: 2px;
        padding: 2px 6px;
        background-color: rgba(255, 152, 0, 0.1);
        border-radius: 4px;
        width: fit-content;
    }

    .mr1 {
        margin-right: 8px;
    }

    .updated {
        padding-left: 16px;
        padding-top: 8px;
        font-size: smaller;
    }

    .center { text-align: center; }
    .left { text-align: left; }
    .right { text-align: right; }

    ha-icon {
        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
        width: 24px;
        height: 24px;
        color: var(--paper-item-icon-color);
    }
`

export default [departureEntityStyles, lineColorsStyles]
