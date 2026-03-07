import { HASLDepartureCard } from "./DepartureCard"

declare global {
    interface Window {
        customCards: Array<Object>
    }
}
customElements.define('hasl4-departure-card', HASLDepartureCard)

window.customCards = window.customCards || []
window.customCards.push({
    type: "hasl4-departure-card",
    name: "HApendel Departure card",
    description: "Show departure times for SL Trafik",
})
