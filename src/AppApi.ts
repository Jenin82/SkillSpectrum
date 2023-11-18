import { becknGateway } from "./services/ApiGateway/ApiGateway";
import { apiRoutes } from "./services/ApiGateway/Endpoints";

export const getSearchData = async () => {
    try {
        const response = await becknGateway.post(apiRoutes.search, {
            data: {
                context: {
                    domain: "dsep:talent",
                    action: "search",
                    version: "1.1.0",
                    bap_id: "ps-bap-network.becknprotocol.io",
                    bap_uri: "https://ps-bap-network.becknprotocol.io/",
                    location: {
                        country: {
                            name: "India",
                            code: "IND",
                        },
                        city: {
                            name: "Bangalore",
                            code: "std:080",
                        },
                    },
                    timestamp: "2022-12-15T15:38:16.226Z",
                    message_id: "64109204-bdff-4af6-a76b-5a33f8aa8675",
                    transaction_id: "bdb5ba09-2241-4f00-b434-73466cd06228",
                },
                message: {
                    intent: {
                        item: {
                            tags: [
                                {
                                    descriptor: {
                                        name: "skills",
                                    },
                                    list: [
                                        {
                                            value: "Agile",
                                        },
                                        {
                                            value: "Figma",
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                },
            },
        });
        console.log(response.data);
    } catch (error) {
        console.error("API error:", error);
    }
}

