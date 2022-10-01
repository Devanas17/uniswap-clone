import sanityClient from "@sanity/client"


export const client = sanityClient({
     projectId: "4ij4pmfb",
     dataset: "production",
     apiVersion: 'v1',
     token: "skaBlFOnvYAcU9R0lHGx6jUKwVPsl9aiNwvKOt3Ucut7o6YkF61BTkl8QmSKMWsNyi4etxbxBNUFlHxcIiVEHhGKkZ2kEeshTfxJna97SmcNwE2qtdsMa4uqnUAGrebXEv3PmsEH2NqkN2g0yHPQvC9yW6X194AYi4RP0LBPfh66q9q8Vyr6",
     useCdn: false,
})