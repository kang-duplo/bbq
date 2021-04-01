const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            async rewrites() {
                return [
                    {
                        source: '/.netlify/functions/:path*',
                        destination: 'http://localhost:9000/.netlify/functions/:path*' // Proxy to Backend
                    }
                ]
            }
        }
    }

    return {
        /* config options for all phases except development here */
    }
}