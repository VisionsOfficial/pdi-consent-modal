const demoJSON = JSON.stringify({
  timestamp: 1711722655180,
  code: 200,
  content: {
    controllerDetails: {
      dpo: {
        name: "",
        contact: "",
      },
      name: "https://api.visionstrust.com/v1/catalog/participants/656dfb3e282d47cfa6b66b30",
      contact: "",
      representative: "",
    },
    internationalTransfers: {
      countries: [],
      safeguards: "",
    },
    automatedDecisionMaking: {
      details: "",
    },
    _id: "65e9f407de244c2a18764332",
    contract: {
      _id: "65e9d4911c2c6c79dfb2b090",
      ecosystem:
        "https://api.visionstrust.com/v1/catalog/ecosystems/65e9d48e1b31ce8b0f98d2a1",
      orchestrator:
        "https://api.visionstrust.com/v1/catalog/participants/656dfb3e282d47cfa6b66b30",
      rolesAndObligations: [],
      status: "pending",
      serviceOfferings: [
        {
          participant: "656dfb3e282d47cfa6b66b2a",
          serviceOffering: "65e9d5b01b31ce8b0f9901b6",
          policies: [
            {
              description: "MUST not use data for more than n times",
              permission: [
                {
                  action: "use",
                  target: "65e9d5b01b31ce8b0f9901b6",
                  constraint: [
                    {
                      leftOperand: "count",
                      operator: "lt",
                      rightOperand: 10,
                    },
                  ],
                },
              ],
              prohibition: [],
            },
          ],
          _id: "65e9d6681c2c6c79dfb2b0b8",
        },
        {
          participant:
            "https://api.visionstrust.com/v1/catalog/participants/656dfb3e282d47cfa6b66b2a",
          serviceOffering:
            "https://api.visionstrust.com/v1/catalog/serviceofferings/65e9d5b01b31ce8b0f9901b6",
          policies: [
            {
              description: "MUST not use data for more than n times",
              permission: [
                {
                  action: "use",
                  target:
                    "https://api.visionstrust.com/v1/catalog/serviceofferings/65e9d5b01b31ce8b0f9901b6",
                  constraint: [
                    {
                      leftOperand: "count",
                      operator: "lt",
                      rightOperand: 10,
                    },
                  ],
                },
              ],
              prohibition: [],
            },
          ],
          _id: "65e9d6721c2c6c79dfb2b0c9",
        },
        {
          participant:
            "https://api.visionstrust.com/v1/catalog/participants/656dfb3e282d47cfa6b66b30",
          serviceOffering:
            "https://api.visionstrust.com/v1/catalog/serviceofferings/65e9d62e1b31ce8b0f990259",
          policies: [
            {
              description: "MUST not use data for more than n times",
              permission: [
                {
                  action: "use",
                  target:
                    "https://api.visionstrust.com/v1/catalog/serviceofferings/65e9d62e1b31ce8b0f990259",
                  constraint: [
                    {
                      leftOperand: "count",
                      operator: "lt",
                      rightOperand: 10,
                    },
                  ],
                },
              ],
              prohibition: [],
            },
          ],
          _id: "65e9d6b31c2c6c79dfb2b0f8",
        },
      ],
      purpose: [],
      members: [
        {
          participant:
            "https://api.visionstrust.com/v1/catalog/participants/656dfb3e282d47cfa6b66b30",
          role: "orchestrator",
          signature: "hasSigned",
          date: "2024-03-07T14:52:15.092Z",
        },
        {
          participant:
            "https://api.visionstrust.com/v1/catalog/participants/656dfb3e282d47cfa6b66b2a",
          role: "participant",
          signature: "hasSigned",
          date: "2024-03-07T15:00:02.644Z",
        },
      ],
      revokedMembers: [],
      createdAt: "2024-03-07T14:52:01.703Z",
      updatedAt: "2024-03-07T15:01:07.171Z",
      __v: 3,
    },
    lastUpdated: "1709831174551",
    dataProvider: {
      "@context": "https://api.visionstrust.com/v1/participant",
      "@type": "Participant",
      _id: "656dfb3e282d47cfa6b66b30",
      did: null,
      legalName: "Test-DataProvider",
      legalPerson: {
        headquartersAddress: {
          countryCode: "",
        },
        legalAddress: {
          countryCode: "",
        },
        registrationNumber: "",
        parentOrganization: [],
        subOrganization: [],
      },
      termsAndConditions: "",
      associatedOrganisation: "5fe215ed1e4d92318a81f8f4",
      schema_version: "1",
      createdAt: "2023-12-04T16:16:01.369Z",
      updatedAt: "2024-02-23T15:53:24.254Z",
      __v: 0,
      dataspaceConnectorAppKey:
        "79d9f583b828c4fc2830b6b33418fcdf12a4514b829c7a6e2b87de3bf1321b80c9fd3f3a47b862c6d46778c02d25fc74c4f43c63301dad802873ee6a76c270b7",
      dataspaceEndpoint:
        "https://provider-data-connector-253244a6c16c.herokuapp.com/",
    },
    purposes: [
      {
        "@context": "https://api.visionstrust.com/v1/serviceoffering",
        "@type": "ServiceOffering",
        _id: "65e9d5b01b31ce8b0f9901b6",
        name: "consumer payload",
        providedBy: "656dfb3e282d47cfa6b66b2a",
        aggregationOf: [
          "https://api.visionstrust.com/v1/catalog/softwareresources/65e9d5701b31ce8b0f990170",
        ],
        dependsOn: [],
        policy: [
          {
            "@context": {
              xsd: "http://www.w3.org/2001/XMLSchema#",
              description: {
                "@id": "https://schema.org/description",
                "@container": "@language",
              },
            },
            "@id":
              "https://registry.visionstrust.com/static/references/rules/rule-access-4.json",
            title: {
              "@type": "xsd/string",
              "@value": "Count",
            },
            uid: "rule-access-4",
            name: "Count",
            description: [
              {
                "@value": "MUST not use data for more than n times",
                "@language": "en",
              },
            ],
            policy: {
              permission: [
                {
                  action: "use",
                  target: "@{target}",
                  constraint: [
                    {
                      leftOperand: "count",
                      operator: "lt",
                      rightOperand: "@{value}",
                    },
                  ],
                },
              ],
            },
            requestedFields: ["target", "value"],
          },
        ],
        termsAndConditions: "",
        dataProtectionRegime: [],
        dataAccountExport: [],
        location: "World",
        description: "description",
        keywords: [],
        dataResources: [],
        softwareResources: [
          {
            "@context": "https://api.visionstrust.com/v1/softwareresource",
            "@type": "SoftwareResource",
            _id: "65e9d5701b31ce8b0f990170",
            providedBy: "656dfb3e282d47cfa6b66b2a",
            name: "CONSUMER PAYLOAD",
            description: "pour demo avec payload",
            aggregationOf: [],
            copyrightOwnedBy: [
              "https://api.visionstrust.com/v1/catalog/participants/656dfb3e282d47cfa6b66b2a",
            ],
            license: [],
            policy: [
              {
                "@context": {
                  xsd: "http://www.w3.org/2001/XMLSchema#",
                  description: {
                    "@id": "https://schema.org/description",
                    "@container": "@language",
                  },
                },
                "@id":
                  "http://localhost:3000/static/references/rules/rule-access-4.json",
                title: {
                  "@type": "xsd/string",
                  "@value": "Count",
                },
                uid: "rule-access-4",
                name: "Count",
                description: [
                  {
                    "@value": "MUST not use data for more than n times",
                    "@language": "en",
                  },
                ],
                policy: {
                  permission: [
                    {
                      action: "use",
                      target: "@{target}",
                      constraint: [
                        {
                          leftOperand: "count",
                          operator: "lt",
                          rightOperand: "@{value}",
                        },
                      ],
                    },
                  ],
                },
                requestedFields: ["target", "value"],
              },
            ],
            category: "5f8d9ea341184f59787e605a",
            locationAddress: [
              {
                countryCode: "World",
                _id: "65e9d5701b31ce8b0f990171",
              },
            ],
            users_clients: 0,
            demo_link: "",
            relevant_project_link: "",
            schema_version: "1.1.0",
            usePII: true,
            isAPI: true,
            createdAt: "2024-03-07T14:55:44.083Z",
            updatedAt: "2024-03-08T13:07:16.027Z",
            __v: 0,
            representation: {
              _id: "65e9d57a1b31ce8b0f99017b",
              resourceID: "65e9d5701b31ce8b0f990170",
              type: "REST",
              url: "https://consumer-api-8d96fe5950ea.herokuapp.com/private/users/{userId}",
              method: "apiKey",
              credential: "65eb0c672797ea2d5076e3f2",
              createdAt: "2024-03-07T14:55:54.754Z",
              updatedAt: "2024-03-08T13:07:16.040Z",
              __v: 0,
            },
          },
        ],
        archived: false,
        visible: true,
        pricing: "150",
        pricingModel: [
          "https://registry.visionstrust.com/static/references/pricing-model/dataBased.json",
        ],
        businessModel: [
          "https://registry.visionstrust.com/static/references/business-model/freemium.json",
        ],
        maximumConsumption: "",
        maximumPerformance: "",
        pricingDescription: "description",
        compliantServiceOfferingVC: "",
        serviceOfferingVC: "",
        schema_version: "1.1.0",
        createdAt: "2024-03-07T14:56:48.477Z",
        updatedAt: "2024-03-13T13:00:44.245Z",
        __v: 0,
      },
    ],
    categoriesOfData: [],
    data: [
      {
        "@context": "https://api.visionstrust.com/v1/serviceoffering",
        "@type": "ServiceOffering",
        _id: "65e9d62e1b31ce8b0f990259",
        name: "PROVIDER PAYLOAD",
        providedBy: "656dfb3e282d47cfa6b66b30",
        aggregationOf: [
          "https://api.visionstrust.com/v1/catalog/dataresources/65e9d5f01b31ce8b0f990217",
        ],
        dependsOn: [],
        policy: [
          {
            "@context": {
              xsd: "http://www.w3.org/2001/XMLSchema#",
              description: {
                "@id": "https://schema.org/description",
                "@container": "@language",
              },
            },
            "@id":
              "https://registry.visionstrust.com/static/references/rules/rule-access-4.json",
            title: {
              "@type": "xsd/string",
              "@value": "Count",
            },
            uid: "rule-access-4",
            name: "Count",
            description: [
              {
                "@value": "MUST not use data for more than n times",
                "@language": "en",
              },
            ],
            policy: {
              permission: [
                {
                  action: "use",
                  target: "@{target}",
                  constraint: [
                    {
                      leftOperand: "count",
                      operator: "lt",
                      rightOperand: "@{value}",
                    },
                  ],
                },
              ],
            },
            requestedFields: ["target", "value"],
          },
        ],
        termsAndConditions: "",
        dataProtectionRegime: [],
        dataAccountExport: [],
        location: "World",
        description: "démo payload",
        keywords: [],
        dataResources: [
          {
            "@context": "https://api.visionstrust.com/v1/dataresource",
            "@type": "DataResource",
            _id: "65e9d5f01b31ce8b0f990217",
            aggregationOf: [],
            name: "PROVIDER PAYLOAD",
            description: "démo payload",
            copyrightOwnedBy: [
              "https://api.visionstrust.com/v1/catalog/participants/656dfb3e282d47cfa6b66b30",
            ],
            license: [],
            policy: [
              {
                "@context": {
                  xsd: "http://www.w3.org/2001/XMLSchema#",
                  description: {
                    "@id": "https://schema.org/description",
                    "@container": "@language",
                  },
                },
                "@id":
                  "http://localhost:3000/static/references/rules/rule-access-4.json",
                title: {
                  "@type": "xsd/string",
                  "@value": "Count",
                },
                uid: "rule-access-4",
                name: "Count",
                description: [
                  {
                    "@value": "MUST not use data for more than n times",
                    "@language": "en",
                  },
                ],
                policy: {
                  permission: [
                    {
                      action: "use",
                      target: "@{target}",
                      constraint: [
                        {
                          leftOperand: "count",
                          operator: "lt",
                          rightOperand: "@{value}",
                        },
                      ],
                    },
                  ],
                },
                requestedFields: ["target", "value"],
              },
            ],
            producedBy: "656dfb3e282d47cfa6b66b30",
            exposedThrough: [],
            obsoleteDateTime: "",
            expirationDateTime: "",
            containsPII: true,
            anonymized_extract: "",
            archived: false,
            attributes: [],
            category: "648353e51d2c11adaae558c1",
            isPayloadForAPI: true,
            country_or_region: "World",
            entries: -1,
            subCategories: [],
            schema_version: "1",
            createdAt: "2024-03-07T14:57:52.808Z",
            updatedAt: "2024-03-08T13:09:07.332Z",
            __v: 0,
            representation: {
              _id: "65e9d5f11b31ce8b0f99021e",
              resourceID: "65e9d5f01b31ce8b0f990217",
              fileType: "",
              type: "REST",
              url: "https://provider-api-a70765a220a4.herokuapp.com/private/users/{userId}",
              sqlQuery: "",
              className: "",
              method: "apiKey",
              credential: "65eb0b582c09fa278f93f16d",
              createdAt: "2024-03-07T14:57:53.354Z",
              updatedAt: "2024-03-08T13:09:07.338Z",
              __v: 0,
            },
            apiResponseRepresentation: {
              _id: "65e9e68c41a12b8077bb48b4",
              resourceID: "65e9d5f01b31ce8b0f990217",
              fileType: "",
              type: "REST",
              url: "https://provider-api-a70765a220a4.herokuapp.com/private/users/{userId}",
              sqlQuery: "",
              className: "",
              method: "apiKey",
              credential: "65eb0b582c09fa278f93f16d",
              createdAt: "2024-03-07T16:08:44.227Z",
              updatedAt: "2024-03-08T13:09:07.324Z",
              __v: 0,
            },
          },
        ],
        softwareResources: [],
        archived: false,
        visible: true,
        pricing: "180",
        pricingModel: [
          "https://registry.visionstrust.com/static/references/pricing-model/dataBased.json",
        ],
        businessModel: [
          "https://registry.visionstrust.com/static/references/business-model/freemium.json",
        ],
        maximumConsumption: "",
        maximumPerformance: "",
        pricingDescription: "description",
        compliantServiceOfferingVC: "",
        serviceOfferingVC: "",
        schema_version: "1.1.0",
        createdAt: "2024-03-07T14:58:54.078Z",
        updatedAt: "2024-03-13T13:00:44.245Z",
        __v: 0,
      },
    ],
    recipients: [
      {
        "@context": "https://api.visionstrust.com/v1/participant",
        "@type": "Participant",
        _id: "656dfb3e282d47cfa6b66b2a",
        did: null,
        legalName: "Test-DataUser",
        legalPerson: {
          headquartersAddress: {
            countryCode: "",
          },
          legalAddress: {
            countryCode: "",
          },
          registrationNumber: "",
          parentOrganization: [],
          subOrganization: [],
        },
        termsAndConditions: "",
        associatedOrganisation: "5fb67b0445566b015587d39a",
        schema_version: "1",
        createdAt: "2023-12-04T16:16:01.350Z",
        updatedAt: "2024-02-22T17:32:44.167Z",
        __v: 0,
        dataspaceConnectorAppKey:
          "0ced7b0ba124a02bf0e14251045b3a96a868478115f7acd7fc1b1631ddadbd3b87cff6a413f659e943e49889bf354942efe342fbe5e66487f3b38f5dbc4d9526",
        dataspaceEndpoint:
          "https://consumer-data-connector-753ad8ea2eaa.herokuapp.com/",
      },
    ],
    retentionPeriod: "",
    piiPrincipalRights: [],
    withdrawalOfConsent: "",
    complaintRights: "",
    provisionRequirements: "",
    schema_version: "0.1.0",
    createdAt: "2024-03-07T17:06:15.965Z",
    updatedAt: "2024-03-07T17:06:15.965Z",
    __v: 0,
  },
});

const logoVT = `
  <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.2112 24.6875C20.0106 24.6875 25.5226 19.231 25.5226 12.5C25.5226 5.76903 20.0106 0.3125 13.2112 0.3125C6.41187 0.3125 0.899902 5.76903 0.899902 12.5C0.899902 19.231 6.41187 24.6875 13.2112 24.6875Z" fill="#17243F"/>
    <path d="M19.6817 9.18499C19.0327 9.18499 18.482 9.71149 18.482 10.355C18.482 10.6865 18.6197 10.979 18.8557 11.1935L15.1977 19.559C15.1583 19.637 15.0797 19.676 15.001 19.676H12.7393C12.6607 19.676 12.582 19.6175 12.5427 19.559L6.80001 6.49399L6.81967 6.45499H13.0147C13.1917 6.90349 13.6243 7.21549 14.116 7.21549C14.765 7.21549 15.3157 6.68899 15.3157 6.04549C15.3157 5.40199 14.7847 4.87549 14.116 4.87549C13.6047 4.87549 13.172 5.18749 13.0147 5.63599H6.83934C6.54434 5.63599 6.26901 5.77249 6.11167 6.02599C5.95434 6.25999 5.93467 6.57199 6.03301 6.84499L11.7757 19.91C11.933 20.2805 12.3263 20.534 12.7393 20.534H15.001C15.414 20.534 15.7877 20.2805 15.9647 19.91L19.6227 11.525C19.6423 11.525 19.662 11.525 19.6817 11.525C20.3307 11.525 20.8813 10.9985 20.8813 10.355C20.8813 9.71149 20.3503 9.18499 19.6817 9.18499Z" fill="url(#paint0_linear_146_454)"/>
    <path d="M10.1826 9.32153L13.8406 17.3555L17.4986 9.32153H10.1826ZM11.4806 10.1405H16.24L13.8603 15.3665L11.4806 10.1405Z" fill="url(#paint1_linear_146_454)"/>
    <defs>
    <linearGradient id="paint0_linear_146_454" x1="5.9777" y1="12.6974" x2="20.8786" y2="12.6974" gradientUnits="userSpaceOnUse">
    <stop stop-color="#DBFFAA"/>
    <stop offset="0.4385" stop-color="#08FFAD"/>
    <stop offset="1" stop-color="#00A2AE"/>
    </linearGradient>
    <linearGradient id="paint1_linear_146_454" x1="10.1907" y1="13.3428" x2="17.5223" y2="13.3428" gradientUnits="userSpaceOnUse">
    <stop stop-color="#DBFFAA"/>
    <stop offset="0.4385" stop-color="#08FFAD"/>
    <stop offset="1" stop-color="#00A2AE"/>
    </linearGradient>
    </defs>
    </svg>
  `;
const KoHoFonts = {
  bold: "./node_modules/consent-modal-web-component/assets/font/KoHo-Bold.ttf",
  boldItalic:
    "./node_modules/consent-modal-web-component/assets/font/KoHo-BoldItalic.ttf",
  extraLight:
    "./node_modules/consent-modal-web-component/assets/font/KoHo-ExtraLight.ttf",
  extraLightItalic:
    "./node_modules/consent-modal-web-component/assets/font/KoHo-ExtraLightItalic.ttf",
  italic:
    "./node_modules/consent-modal-web-component/assets/font/KoHo-Italic.ttf",
  light:
    "./node_modules/consent-modal-web-component/assets/font/KoHo-Light.ttf",
  lightItalic:
    "./node_modules/consent-modal-web-component/assets/font/KoHo-LightItalic.ttf",
  medium:
    "./node_modules/consent-modal-web-component/assets/font/KoHo-Medium.ttf",
  mediumItalic:
    "./node_modules/consent-modal-web-component/assets/font/KoHo-MediumItalic.ttf",
  regular:
    "./node_modules/consent-modal-web-component/assets/font/KoHo-Regular.ttf",
  semiBold:
    "./node_modules/consent-modal-web-component/assets/font/KoHo-SemiBold.ttf",
  semiBoldItalic:
    "./node_modules/consent-modal-web-component/assets/font/KoHo-SemiBoldItalic.ttf",
};

class ConsentModal extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.PDCAdminJWT = this.getAttribute("data-PDCAdminJWT");
    this.availableExchangesEndpoint = this.getAttribute(
      "data-availableExchangesEndpoint"
    );
    this.privacyNoticeEndpoint = this.getAttribute(
      "data-privacyNoticeEndpoint"
    );
    this.consentGrantEndPoint = this.getAttribute("data-consentGrantEndPoint");
    this.userIdentifier = this.getAttribute("data-userIdentifier");
    this.branding = {
      img: {
        src: JSON.parse(this.getAttribute("data-branding"))?.img?.src
          ? `<img src="${
              JSON.parse(this.getAttribute("data-branding"))?.img?.src
            }" alt="${
              JSON.parse(this.getAttribute("data-branding"))?.img?.alt || ""
            }" />`
          : logoVT,
        alt: JSON.parse(this.getAttribute("data-branding"))?.img?.alt,
        size: {
          width:
            JSON.parse(this.getAttribute("data-branding"))?.img?.size?.width ||
            "70px",
          height:
            JSON.parse(this.getAttribute("data-branding"))?.img?.size?.height ||
            "70px",
          translateY:
            JSON.parse(this.getAttribute("data-branding"))?.img?.size
              ?.translateY || "30%",
        },
      },
      colors: {
        primary:
          JSON.parse(this.getAttribute("data-branding"))?.colors?.primary ||
          "#00A2AE",
        secondary:
          JSON.parse(this.getAttribute("data-branding"))?.colors?.secondary ||
          "#17243F",
        tertiary:
          JSON.parse(this.getAttribute("data-branding"))?.colors?.tertiary ||
          "#08FFAD",
        quaternary:
          JSON.parse(this.getAttribute("data-branding"))?.colors?.quaternary ||
          "#DBFFAA",
        gradient:
          JSON.parse(this.getAttribute("data-branding"))?.colors?.gradient ||
          "linear-gradient(to right, #DBFFAA, #00A2AE, #08FFAD)",
        bgOpacity:
          JSON.parse(this.getAttribute("data-branding"))?.colors?.bgOpacity ||
          "#08FFAD1f",
        buttonText: {
          initial:
            JSON.parse(this.getAttribute("data-branding"))?.colors?.buttonText
              ?.initial || "#000000",
          hover:
            JSON.parse(this.getAttribute("data-branding"))?.colors?.buttonText
              ?.hover || "#ffffff",
        },
        active: {
          background:
            JSON.parse(this.getAttribute("data-branding"))?.colors?.active
              ?.background || "#00A2AE",
          text:
            JSON.parse(this.getAttribute("data-branding"))?.colors?.active
              ?.text || "#000000",
        },
      },
    };
    this.demo = this.getAttribute("data-demo") || "false";
    this.modalContent = "choose";

    this.render();
  }

  async getPrivacyNotice(currentPrivacyNotice) {
    if (currentPrivacyNotice) {
      try {
        const response = await fetch(currentPrivacyNotice, {
          headers: {
            Authorization: `Bearer ${this.PDCAdminJWT}`,
          },
        });
        const json = await response.json();
        return json;
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
      return;
    } else {
      if (this.demo === "true") {
        return JSON.parse(demoJSON);
      } else {
        try {
          const response = await fetch(this.privacyNoticeEndpoint);
          const json = await response.json();
          return json;
        } catch (error) {
          console.error("Error fetching JSON:", error);
        }
      }
    }
  }

  async getAvailableExchanges() {
    try {
      const res = await fetch(this.availableExchangesEndpoint, {
        headers: {
          Authorization: `Bearer ${this.PDCAdminJWT}`,
        },
      });
      const json = await res?.json();
      return json;
    } catch (error) {
      console.error("Error fetching JSON:", error);
    }
  }

  async getContracts(availableExchanges) {
    try {
      const exchangePromises = availableExchanges?.exchanges?.map(
        async (exchange) => {
          const res = await fetch(exchange.contract);
          const contracts = await res.json();

          const fetchDataPromises = [];

          for (const key in contracts) {
            if (
              key === "dataProvider" ||
              key === "dataConsumer" ||
              key === "ecosystem"
            ) {
              fetchDataPromises.push(
                (async () => {
                  const res = await fetch(contracts[key]);
                  contracts[key] = await res.json();
                })()
              );
            }
          }

          await Promise.all(fetchDataPromises);

          const participantSelfDescription = async () => {
            const checkUrl =
              exchange?.participantSelfDescription?.includes("https");

            if (!checkUrl) return;

            const participant = await fetch(
              exchange?.participantSelfDescription
            );
            const jsonParticipant = await participant.json();
            return jsonParticipant;
          };

          const consumer = await participantSelfDescription();

          return {
            consumer,
            contracts,
          };
        }
      );

      const exchangeContracts = await Promise.all(exchangePromises);

      return exchangeContracts;
    } catch (error) {
      console.error("Error fetching contracts:", error);
      throw error;
    }
  }

  async getPrivacyNotices(privacyNotices) {
    try {
      const noticesPromises = privacyNotices?.content?.map(async (notice) => {
        const recipientsPromises = notice.recipients?.map(async (r) => {
          const res = await fetch(r);
          return res.json();
        });
        const purposesPromises = notice.purposes?.map(async (p) => {
          const res = await fetch(p.purpose);
          return res.json();
        });

        const recipients = await Promise.all(recipientsPromises);
        const purposes = await Promise.all(purposesPromises);

        notice.recipients = recipients;
        notice.purposes = purposes;

        return notice;
      });

      return await Promise.all(noticesPromises);
    } catch (error) {
      console.error("Error fetching privacy notices:", error);
    }
  }

  async render() {
    if (this.PDCAdminJWT && this.availableExchangesEndpoint) {
      try {
        const availableExchanges = await this.getAvailableExchanges();
        const contracts = await this.getContracts(availableExchanges?.content);
        this.contracts = await contracts;
        this.renderData("", availableExchanges?.content);
        return;
      } catch (error) {
        console.error("Error:", error);
      }
      return;
    }

    try {
      const privacyNotice = await this.getPrivacyNotice();
      this.renderData(privacyNotice);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  handleSelectExchange(contractExchange) {
    this.activeExchange = contractExchange;
  }

  renderStyleModal() {
    const styleModal = document.createElement("style");
    styleModal.textContent = `
              @font-face {
                font-family: 'KoHo';
                src: url('${KoHoFonts.bold}'),
                    url('${KoHoFonts.boldItalic}'),
                    url('${KoHoFonts.extraLight}'),
                    url('${KoHoFonts.extraLightItalic}'),
                    url('${KoHoFonts.italic}'),
                    url('${KoHoFonts.light}'),
                    url('${KoHoFonts.lightItalic}'),
                    url('${KoHoFonts.semiBold}'),
                    url('${KoHoFonts.semiBoldItalic}'),
                    url('${KoHoFonts.regular}'),
                    url('${KoHoFonts.medium}'),
                    url('${KoHoFonts.mediumItalic}');
              }

              #modal-backdrop {
                  font-family: "KoHo", sans-serif;
                  display: none;
                  align-items: flex-start;
                  position: fixed;
                  inset: 0;
                  overflow-y: auto;
                  background-color: rgba(0, 0, 0, 0.5);
                  z-index: 9998;
                  min-height: 100vh;
                  padding-inline: 0.5rem;
              }

              #button-open-modal {
                font-family: "KoHo", sans-serif;
                border: 1px solid #fefefe;
                background-color: ${this.branding.colors.primary};
                color: ${this.branding.colors.buttonText.initial};
                padding: 0.6rem 1rem;
                cursor: pointer;
                transition: all 0.1s ease-in-out;
                border-radius: 5px;
              }
              #button-open-modal:hover {
                background-color: ${this.branding.colors.secondary};
                color: ${this.branding.colors.buttonText.hover};
              }

              #consent-modal {
                  font-family: "KoHo", sans-serif;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  text-align: center;
                  position: relative;
                  background-color: #fefefe;
                  margin-block: 30px;
                  z-index: 9999;
                  cursor: initial;
                  border-radius: 15px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                  overflow: hidden;
                  width: 100%;
                  margin-inline: auto;
                  min-width: 250px;
                  max-width: 900px;
                  -webkit-animation-name: animatetop;
                  -webkit-animation-duration: 0.4s;
                  animation-name: animatetop;
                  animation-duration: 0.4s;
              }

              .consent-modal-bg-head {
                  position: relative;
                  background: ${
                    this.branding.colors.gradient
                      ? this.branding.colors.gradient
                      : this.branding.colors.primary
                  };
                  width: 100%;
                  min-height: 56px;
                  border-bottom: 5px solid ${this.branding.colors.secondary};
                  margin-bottom: 35px;
              }

              .consent-modal-head-logo {
                  width: ${this.branding.img.size.width};
                  height: ${this.branding.img.size.height};
                  position: absolute;
                  margin-left: auto;
                  margin-right: auto;
                  left: 0;
                  right: 0;
                  text-align: center;
                  transform: translateY(${this.branding.img.size.translateY});
              }
              .consent-modal-head-logo img, .consent-modal-head-logo  svg {
                width: ${this.branding.img.size.width};
                height: ${this.branding.img.size.height};
                max-width: ${this.branding.img.size.width};
                min-width: ${this.branding.img.size.width};
                min-height: ${this.branding.img.size.height};
                max-height: ${this.branding.img.size.height};
                object-fit: contain;
              }

              .consent-modal-close {
                  position: absolute;
                  top: 10px;
                  right: 10px;
                  color: #fefefe;
                  cursor: pointer;
                  font-size: 2rem;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 35px;
                  height: 35px;
                  min-width: 35px;
                  min-height: 35px;
                  transition: all 0.1s ease-in-out;
                  border-radius: 3px;
              }
              .consent-modal-close svg {
                  transition: all 0.2s ease-in;
              }
              .consent-modal-close:hover svg {
                  transform: scale(1.03);
              }

              .consent-modal-header h3 {
                  font-size: 20px;
                  font-weight: bold;
              }
              .consent-modal-header .consent-modal-header-purpose {
                  color: ${this.branding.colors.primary};
                  font-size: 24px;
                  margin-top: 5px;
              }
              .consent-modal-header-purpose-sub {
                  font-size: 18px;
              }

              .consent-modal-body {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  margin-block: 30px;
                  gap: 16px;
                  max-width: 600px;
              }
              .consent-modal-body-exchange {
                  display: flex;
                  align-items: flex-start;
                  justify-content: space-between;
                  gap: 20px;
                  width: 100%;
              }
              .consent-modal-body-exchange svg {
                  transform: translateY(30px);
                  min-width: 30px;
              }
              .consent-modal-body-exchange-participant {
                  display: flex;
                  align-items: center;
                  flex-direction: row;
                  justify-content: center;
                  gap: 5px;
              }
              .consent-modal-body-provider, .consent-modal-body-consumer {
                  display: flex;
                  align-items: center;
                  flex-direction: row;
                  justify-content: center;
                  flex-wrap: wrap;
                  gap: 12px;
              }
              .controller-identify {
                  display: flex;
                  align-items: center;
                  flex-direction: column;
                  justify-content: flex-start;
                  gap: 12px;
                  text-align: start;
              }
              .participant-logo {
                border: 2px solid ${this.branding.colors.primary};
                background: #ffffff;
                width: 80px;
                min-width: 80px;
                max-width: 80px;
                height: 80px;
                min-height: 80px;
                max-height: 80px;
                aspect-ratio: 1/1;
                border-radius: 15px;
                object-fit: contain;
              }
              .pdi-container {
                display: flex;
                flex-direction: column;
                width: 100%;
                align-items: flex-start;
                text-align: start;
                gap: 4px;
              }
              .pdi-container h4 {
                font-size: 20px;
              }
              .pdi-container h5 {
                font-size: 18px;
                color: ${this.branding.colors.primary};
              }
              .organisations-container {
                display: flex;
                flex-direction: column;
                align-items: stretch;
                gap: 24px;
              }
              .organisations-container h4 {
                font-weight: bold;
                font-size: 20px;
                margin-bottom: 8px;
              }
              .consent-modal-legal-container, .consent-modal-learn-more-container {
                  display: flex;
                  flex-direction: column;
                  width: 100%;
                  align-items: flex-start;
                  text-align: start;
                  gap: 12px;
              }
              .consent-modal-legal-data {
                  display: flex;
                  flex-direction: column;
                  width: 100%;
              }
              .consent-modal-legal-main-title {
                  font-weight: bold;
                  font-size: 20px;
              }
              .consent-modal-legal-information-title {
                  font-size: 18px;
              }
              .consent-modal-legal-information-link {
                  color: ${this.branding.colors.primary};
                  text-decoration: none;
              }
              .consent-modal-legal-information-link:hover {
                  text-decoration: underline;
              }

              .consent-modal-footer {
                  display: flex;
                  align-items: center;
                  flex-direction: column;
                  gap: 16px;
              }
              .consent-modal-footer-buttons {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 24px;
                  flex-wrap: wrap;
              }
              .consent-modal-footer button {
                  border-radius: 65px;
                  border: none;
                  cursor: pointer;
                  font-size: 18px;
                  padding: 12px 24px;
                  min-width: 150px;
                  font-weight: 500;
              }
              #btn-consent, .btn-next, .btn-next-notice, .btn-close {
                  background: ${this.branding.colors.primary};
                  border: 1px solid ${this.branding.colors.primary};
                  transition: all 0.1s ease-in;
                  color: ${this.branding.colors.buttonText.initial};
              }
              #btn-decline {
                  background: #ffffff;
                  border: 1px solid ${this.branding.colors.primary};
                  transition: all 0.1s ease-in;
              }
              #btn-consent:hover, #btn-decline:hover, .btn-next:hover, .btn-next-notice:hover, .btn-close:hover {
                background: ${this.branding.colors.secondary};
                border-color: ${this.branding.colors.secondary};
                color: ${this.branding.colors.buttonText.hover};
              }
              .btn-next, .btn-next-notice {
                margin-block: 12px;
              }

              .consent-modal-select-contracts {
                margin-block: 12px;
              }

              .consent-modal-extra {
                  width: 100%;
                  display: flex;
                  align-items: center;
                  margin-top: 20px;
              }
              .consent-modal-extra button {
                  width: calc(100% /3);
                  border: none;
                  border-top: 1px solid ${this.branding.colors.secondary};
                  background: #ffffff;
                  border-left: 1px solid ${this.branding.colors.secondary};
                  cursor: pointer;
                  padding: 0px;
                  height: 40px;
              }
              .consent-modal-extra .active {
                  background: ${this.branding.colors.primary};
                  color: ${this.branding.colors.buttonText.initial};
              }
              .consent-modal-extra button:first-child {
                  border-left: 0;
              }

              .consent-modal-body-shared {
                  display: flex;
                  flex-direction: column;
                  align-items: stretch;
                  text-align: start;
                  gap: 16px;
                  width: 100%;
              }
              .consent-modal-body-shared h4 {
                  text-align: center;
                  width: 100%;
                  font-size: 20px;
              }
              .purpose-container, .bi-lateral, .dsuc, .privacy-notice-container {
                  display: flex;
                  flex-direction: column;
                  gap: 16px;
                  background: ${this.branding.colors.bgOpacity};
                  padding: 10px;
                  border-radius: 15px;
              }
              .bi-lateral, .dsuc {
                width: 100%;
              }
              .purpose-obligation {
                  text-align: center;
                  font-weight: bold;
              }
              .purpose-information {
                  display: flex;
                  flex-direction: column;
                  gap: 4px;
                  font-size: 14px;
                  width: 100%;
              }
              .purpose-information h5 {
                  font-size: 18px;
              }
              .purpose-sr {
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: space-between;
                  gap: 16px;
              }
              .purpose-sr-information {
                  display: flex;
                  flex-direction: column;
                  gap: 8px;
                  font-size: 14px;
              }
              .purpose-sr-information-name {
                  font-size: 16px;
                  font-weight: 600;
              }
              .switch {
                  position: relative;
                  display: inline-block;
                  width: 40px;
                  height: 24px;
              }
              .switch-content {
                  display: flex;
                  align-items: center;
                  gap: 10px;
              }
              .switch .switch-input {
                  display: none;
              }
              .switch .switch-label {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 40px;
                  height: 20px;
                  background-color: grey;
                  border-radius: 20px;
                  cursor: pointer;
                  transition: background-color 0.3s;
              }
              .switch .switch-label::before {
                  content: '';
                  position: absolute;
                  width: 16px;
                  height: 16px;
                  border-radius: 50%;
                  top: 2px;
                  left: 3px;
                  background-color: #ffffff;
                  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
                  transition: transform 0.3s;
              }
              .switch .switch-input:checked + .switch-label::before {
                  transform: translateX(18px);
              }
              .switch .switch-input:checked + .switch-label {
                  background: ${this.branding.colors.tertiary};
              }

              details {
                border-bottom: 1px solid ${this.branding.colors.bgOpacity};
                width: 100%;
              }
              details summary {
                  width: 100%;
                  list-style: none;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  cursor: pointer;
                  font-weight: bold;
                  transition: all 0.1s ease;
              }
              details summary svg {
                  transition: transform 0.1s ease-in;
                  transform: rotate(0deg);
              }
              details summary svg:hover {
                  background: grey;
                  border-radius: 5px;
              }
              details > div {
                  opacity: 0;
                  transform: translateY(-10px);
                  transition: all 0.2s ease-out;
                  text-align: start;
              }
              details[open] {
                  padding-bottom: 10px;
              }
              details[open] > summary {
                color: ${this.branding.colors.primary};
              }
              details[open] > summary svg {
                  transform: rotate(-180deg);
              }
              details[open] > div {
                  opacity: 1;
                  transform: translateY(0);
              }
              .card-toggle {
                background: ${this.branding.colors.bgOpacity};
                padding: 10px;
                border-radius: 15px;
                border: none;
                width: auto;
              }
              .card-toggle > summary > span {
                display: flex;
                gap: 12px;
                align-items: center;
                text-transform: uppercase;
                color: initial;
                transition: all 0.1s ease;
              }
              .card-toggle[open] summary span {
                color: ${this.branding.colors.primary};
              }
              .card-toggle[open] > div {
                padding-top: 12px;
              }

              .purpose-data-sharing > summary {
                font-size: 18px;
                font-weight: bold;
                color: #000000;
              }
              .purpose-data-sharing > div, .your-data-sharing {
                display: flex;
                flex-direction: column;
                align-items: stretch;
                gap: 4px;
                padding-block: 10px;
              }
              .purpose-data-sharing[open] > summary {
                color: #000000;
              }
              .your-data-sharing  {
                padding: 0;
              }

              .data-sharing, .data-sharing-content {
                display: flex;
                flex-direction: column;
                align-items: stretch;
                gap: 8px;
              }
              .data-sharing-content {
                gap: 24px;
              }

              .data-sharing h5 {
                font-size: 18px;
                font-weight: 600;
              }

              .card-toggle-data {
                font-size: 16px;
              }

              .participant-information {
                display: flex;
                flex-direction: column;
                align-items: start;
                gap: 4px;
                text-align: start;
              }
              .participant-information p:last-child {
                text-transform: initial;
                font-weight: 500;
                font-size: 14px;
              }

              .consent-modal-body-email, .consent-modal-body-email-inputs {
                  display: flex;
                  align-items: center;
                  flex-direction: column;
                  gap: 8px;
              }
              #email-custom {
                  padding: 8px 12px;
                  border-radius: 5px;
                  border: 1px solid ${this.branding.colors.secondary}
              }
              .checkbox-wrapper-input {
                  display: none;
                  visibility: hidden;
              }
              .checkbox-wrapper-input:checked + .checkbox-wrapper-label .checkbox-wrapper-custom-input {
                 background: ${this.branding.colors.primary};
                 border-color: ${this.branding.colors.primary};
              }
              .checkbox-wrapper-input:checked + .checkbox-wrapper-label .checkbox-wrapper-custom-input svg {
                 stroke-dashoffset: 0;
              }
              .checkbox-wrapper-label {
                  display: inline-flex;
                  justify-content: flex-start;
                  align-items: center;
                  vertical-align: bottom;
                  margin: auto;
                  user-select: none;
                  -webkit-user-select: none;
                  cursor: pointer;
              }
              .checkbox-wrapper-label:hover .checkbox-wrapper-custom-input {
                  border-color: ${this.branding.colors.primary};
              }
              .checkbox-wrapper-label span {
                  display: inline-flex;
                  justify-content: center;
                  align-items: center;
                  vertical-align: middle;
                  transform: translate3d(0, 0, 0);
              }
              .checkbox-wrapper-custom-input {
                  position: relative;
                  border-radius: 3px;
                  transform: scale(1);
                  vertical-align: middle;
                  border: 1px solid grey;
                  transition: all 0.2s ease;
                  width: 14px;
                  height: 14px;
              }
              .checkbox-wrapper-custom-input svg {
                  fill: none;
                  stroke: #ffffff;
                  stroke-width: 2;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-dasharray: 16px;
                  stroke-dashoffset: 16px;
                  transition: all 0.3s ease;
                  transition-delay: 0.1s;
                  transform: translate3d(0, 0, 0);
              }
              .checkbox-wrapper-content {
                  font-size: 14px;
                  padding-left: 8px;
              }

              .consent-modal-footer-certified {
                  display: flex;
                  align-items: center;
                  gap: 4px;
              }

              .logo-certified svg, .logo-certified img {
                  width: 25px;
                  height: 25px;
                  max-width: 25px;
                  min-width: 25px;
                  min-height: 25px;
                  max-height: 25px;
              }
              .logo-certified {
                  width: 25px;
                  height: 25px;
                  max-width: 25px;
                  min-width: 25px;
                  min-height: 25px;
                  max-height: 25px;
              }

              h3, h4, h5, p {
                  margin: 0;
              }

              .consent-modal-header, .consent-modal-body, .consent-modal-footer {
                  width: calc(100% - 20px);
                  margin-inline: 10px;
              }

              .button-disabled {
                background: grey !important;
                border-color: grey !important;
                pointer-events: none;
              }

              .simple-loader {
                display: inline-flex;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                position: relative;
                animation: rotate 1s linear infinite;
              }
              .simple-loader::before {
                content: '';
                box-sizing: border-box;
                position: absolute;
                inset: 0px;
                border-radius: 50%;
                border: 3px solid #fff;
                animation: prixClipFix 2s linear infinite;
              }

              .contract-item {
                cursor: pointer;
                border-radius: 5px;
                text-align: start;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                flex-wrap: wrap;
                padding: 8px;
                gap: 12px;
              }
              .contract-item:hover {
                background: ${this.branding.colors.active.background}20;
              }
              .contract-active {
                background: ${this.branding.colors.active.background};
                color: ${this.branding.colors.active.text};
              }
              .contract-active:hover {
                background: ${this.branding.colors.active.background};
                color: ${this.branding.colors.active.text};
              }

              .consent-modal-select-privacy-notice {
                align-items: stretch;
              }
              .privacy-notice-container {
                cursor: pointer;
                border-radius: 5px;
                padding: 8px;
                gap: 12px;
              }
              .privacy-notice-container:hover {
                background: ${this.branding.colors.active.background}20;
              }
              .privacy-notice-container-active {
                background: ${this.branding.colors.active.background};
                color: ${this.branding.colors.active.text};
              }
              .privacy-notice-container-active:hover {
                background: ${this.branding.colors.active.background};
                color: ${this.branding.colors.active.text};
              }

              .inner-toggle {
                margin-block: 4px;
              }

              @keyframes rotate {
                  100% {
                      transform: rotate(360deg);
                  }
              }
              @keyframes prixClipFix {
                  0% {
                      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
                  }
                  25% {
                      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
                  }
                  50% {
                      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
                  }
                  75% {
                      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
                  }
                  100% {
                      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
                  }
              }

              @-webkit-keyframes animatetop {
                  from {transform: translateY(-100px); opacity:0}
                  to {transform: translateY(0); opacity:1}
              }

              @keyframes animatetop {
                  from {transform: translateY(-100px); opacity:0}
                  to {transform: translateY(0); opacity:1}
              }
          `;

    return styleModal;
  }

  renderConsentModalBgHeader() {
    const bgHeader = `
              <div class="consent-modal-bg-head">
                  <slot name="modal-close-icon">
                      <span class="consent-modal-close">
                          <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                              d="M20.4896 20.4896C25.1779 15.8012 25.1779 8.19988 20.4896 3.51152C15.8012 -1.17684 8.19988 -1.17684 3.51152 3.51152C-1.17684 8.19988 -1.17684 15.8012 3.51152 20.4896C8.19988 25.1779 15.8012 25.1779 20.4896 20.4896Z"
                              fill="black"
                              fill-opacity="0.84"
                              />
                              <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.0495 15.2133L15.2133 11.0495L18.4978 7.76493C19.1201 7.1426 19.1201 6.12454 18.4978 5.50221C17.8755 4.87988 16.8574 4.87988 16.2351 5.50221L12.9505 8.78668L8.78668 12.9505L5.50221 16.2351C4.87988 16.8574 4.87988 17.8755 5.50221 18.4978C6.12454 19.1201 7.1426 19.1201 7.76493 18.4978L11.0495 15.2133Z"
                              fill="white"
                              />
                              <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.2133 12.9505L11.0495 8.78668L7.76493 5.50221C7.1426 4.87988 6.12454 4.87988 5.50221 5.50221C4.87988 6.12454 4.87988 7.1426 5.50221 7.76493L8.78668 11.0495L12.9505 15.2133L16.2351 18.4978C16.8574 19.1201 17.8755 19.1201 18.4978 18.4978C19.1201 17.8755 19.1201 16.8574 18.4978 16.2351L15.2133 12.9505Z"
                              fill="white"
                              />
                          </svg>
                      </span>
                  </slot>
                  <span class="consent-modal-head-logo">${this.branding.img.src}</span>
              </div>
          `;

    return bgHeader;
  }

  renderConsentModalHeader(privacyNotice, modalContent) {
    const modalHeader = `
              <div class="consent-modal-header">
                  <slot name="modal-title">
                      <h3>Sharing your personal data for the purpose of</h3>
                  </slot>
                  <slot name="purpose-title"><h3 class="consent-modal-header-purpose">${privacyNotice?.content?.purposes?.[0]?.name}</h3></slot>
              </div>
          `;

    const modalHeaderLearnMore = `
              <h3 class="consent-modal-header-purpose">Discover how your data will be used</h3>
          `;

    const modalHeaderLegal = `
              <h3 class="consent-modal-header-purpose">Legal aspects of your consent</h3>
              <p class="consent-modal-header-purpose-sub">Understanding your data rights empowers you to take control of your personal information.</p>
          `;

    const modalHeaderExchange = `
        <div class="consent-modal-header">
          <h3 class="consent-modal-header-purpose">Select your exchange contract</h3>
        </div>
      `;

    const modalHeaderPrivacyNotice = `
          <div class="consent-modal-header">
            <h3 class="consent-modal-header-purpose">Select your privacy notice</h3>
          </div>
      `;

    const modalHeaderSuccess = `
          <div class="consent-modal-header success">
            <h3 class="consent-modal-header-purpose">Congrat you consent was successfuly create.</h3>  
          </div>
      `;

    const newHeader = {
      choose: modalHeader,
      learnMore: modalHeaderLearnMore,
      legal: modalHeaderLegal,
      chooseExchange: modalHeaderExchange,
      choosePrivacyNotice: modalHeaderPrivacyNotice,
      success: modalHeaderSuccess,
    };

    return newHeader[modalContent];
  }

  renderConsentModalBody(privacyNotice, modalContent, privacyNotices) {
    const modalBodyPrivacyNotices = `
        <div class="consent-modal-body consent-modal-select-privacy-notice">
          ${privacyNotices
            ?.map((pn) => {
              return `
              <div class="privacy-notice-container" id="${pn?._id}">
                  <div>
                    ${pn?.recipients?.map(
                      (r) => `
                        <p>
                          ${r?.legalName}
                        </p>
                        `
                    )}
                  </div>
                  ${pn?.purposes
                    ?.map(
                      (p) =>
                        `<div>
                          <div>
                              <h5>${p?.name}</h5>
                              <span>${p?.description}</span>
                          </div>
                      </div>`
                    )
                    .join("")}
              </div>
            `;
            })
            .join("")}
        </div>
      `;

    const modalBodyExchanges = `
      <div class="consent-modal-body consent-modal-select-contracts">
          <div class="bi-lateral">
              <h4>Bi lateral contracts</h4>
              ${this.contracts
                ?.map((exchange, i) => {
                  const dataProviderName =
                    exchange?.contracts?.dataProvider?.legalName;
                  const dataConsumerName = exchange?.consumer?.legalName;

                  if (!dataConsumerName || !dataProviderName) return;

                  return `
                          <div class="contract-item" id="${exchange?.contracts?._id}">
                              <div>${dataProviderName}</div>
                              <div>${dataConsumerName}</div>
                          </div>
                      `;
                })
                .join("")}
          </div>
          <div class="dsuc">
              <h4>Data space use case contracts</h4>
              ${this.contracts
                ?.map((exchange, i) => {
                  const ecosystemName = exchange?.contracts?.ecosystem?.name;
                  const dataConsumerName = exchange?.consumer?.legalName;

                  if (!ecosystemName) return;

                  return `
                    <div class="contract-item" id="${exchange?.contracts?._id}">
                        <p>${ecosystemName}</p>
                        <div>${dataConsumerName}</div>
                    </div>
                  `;
                })
                .join("")}
          </div>
      </div>
    `;

    const modalBodyLearnMore = `
          <div class="consent-modal-learn-more-container">
            <div class="organisations-container">
              <div>
                <h4>Organisations involved</h4>
                <div class="organisation-content">
                  ${privacyNotice?.content?.recipients?.map(
                    (r) => `
                        <details class="card-toggle">
                          <summary>
                            <span>
                              <img class="participant-logo" src="${
                                r?.logo?.includes("https")
                                  ? r?.logo
                                  : `https://api.visionstrust.com/images/${r?.logo}`
                              }"  alt="logo ${r?.legalName}" />
                              <span class="participant-information">
                                <p>
                                  ${r?.legalName}
                                </p>
                                <p>
                                  Why is your data used?
                                </p>
                              </span>
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                          </summary>
                          <div>
                            ${privacyNotice?.content?.purposes?.map(
                              (p) =>
                                `
                                <div>
                                  <p><b>${p?.name}</b></p>
                                  <p>${p?.description}</p>
                                  <p><b>You can find this data here:</b> ${p?.location}</p>
                                </div>
                              `
                            )}
                          </div>
                      </details>
                      `
                  )}
              </div>
            </div>
            <div class="data-sharing">
              <div>
                <h4>Data sharing</h4>
                <h5>Your data</h5>
              </div>
                <div class="data-sharing-content">
                <div class="your-data-sharing">
                  ${privacyNotice?.content?.data?.map(
                    (d) =>
                      `
                      <details class="card-toggle-data">
                        <summary>
                          <span>${d?.name}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                        </summary>
                        <div>
                          <p>${d?.description}</p>
                          <p><b>You can find this data here:</b> ${
                            d?.location
                          }</p>
                          ${d?.softwareResources?.map(
                            (sr) =>
                              `
                          <details class="card-toggle-data inner-toggle">
                            <summary>
                              <span>${sr?.name}</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                            </summary>
                            <div>
                              <p>${sr?.description}</p>
                            </div>
                          </details>
                          `
                          )}
                      ${d?.dataResources?.map(
                        (dr) =>
                          `
                          <details class="card-toggle-data inner-toggle">
                            <summary>
                              <span>${dr?.name}</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                            </summary>
                            <div>
                              <p>${dr?.description}</p>
                            </div>
                          </details>
                          `
                      )}
                        </div>
                      </details>
                      `
                  )}
                </div>
              </div>
            </div>

            <div class="pdi-container">
              <h4>Personal Data intermediary</h4>
              <h5>VISIONSTRUST</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            </div>
          </div>
          `;

    const legalData = [
      {
        mainTitle: "Consent",
        information: [
          {
            title: "What is consent?",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            link: "#",
          },
          {
            title: "How to exercise the right to withdraw consent?",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            link: "#",
          },
        ],
      },
      {
        mainTitle: "Methods of Data Processing and Collection",
        information: [
          {
            title: "",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            link: "#",
          },
        ],
      },
      {
        mainTitle: "Data Localization",
        information: [
          {
            title: "",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            link: "#",
          },
        ],
      },
      {
        mainTitle: "Data storage",
        information: [
          {
            title: "Duration",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            link: "#",
          },
          {
            title: "Geolocation",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            link: "#",
          },
        ],
      },
      {
        mainTitle: "Third-party services",
        information: [
          {
            title: "Organisation name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            link: "#",
          },
        ],
      },
    ];
    const modalBodyLegal = `
          <div class="consent-modal-legal-container">
              ${legalData
                .map(
                  (data) => `
                      <div class="consent-modal-legal-data">
                          <h4 class="consent-modal-legal-main-title">${
                            data.mainTitle
                          }</h4>
                          <div class="consent-modal-legal-information">
                              ${data.information
                                .map(
                                  (info) => `
                                      ${
                                        info.title &&
                                        `<h5 class="consent-modal-legal-information-title">${info.title}</h5>`
                                      }
                                      <p class="consent-modal-legal-information-description">${
                                        info.description
                                      } ${
                                    info.link &&
                                    `<a href="${info.link}" target="_blank" class="consent-modal-legal-information-link">See more</a>`
                                  }</p>
                                  `
                                )
                                .join("")}
                          </div>
                      </div>
                  `
                )
                .join("")}
          </div>
      `;

    const modalBody = `
          <div class="consent-modal-body">
              <div class="consent-modal-body-exchange">
                  <div class="consent-modal-body-exchange-participant">
                      <div class="consent-modal-body-provider">
                          <img class="participant-logo" <img class="participant-logo" src="${
                            privacyNotice?.content?.dataProvider?.logo?.includes(
                              "https"
                            )
                              ? privacyNotice?.content?.dataProvider?.logo
                              : `https://api.visionstrust.com/images/${privacyNotice?.content?.dataProvider?.logo}`
                          }" alt="Logo ${
      privacyNotice?.content?.dataProvider?.legalName
    }">
                          <div class="controller-identify">
                              <span>${
                                privacyNotice?.content?.dataProvider?.legalName
                              }</span>
                              <span>Controller's identify</span>
                          </div>
                      </div>
                  </div>
                  <slot name="exchange-icon">
                      <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z" fill="${
                        this.branding.colors.primary
                      }"/>
                      </svg>
                  </slot>
                  <div class="consent-modal-body-exchange-participant">
                      ${privacyNotice?.content?.recipients?.map(
                        (r) => `
                              <div class="consent-modal-body-consumer">
                                  <img class="participant-logo" <img class="participant-logo" src="${
                                    r?.logo?.includes("https")
                                      ? r?.logo
                                      : `https://api.visionstrust.com/images/${r?.logo}`
                                  }" alt="logo ${r?.legalName}" />
                                  <div class="controller-identify">
                                      <span>${r?.legalName}</span>
                                      <span>Controller's identify</span>
                                  </div>
                              </div>
                          `
                      )}
                  </div>
              </div>
              <div class="consent-modal-body-shared">
                  <h4>Select the data to share</h4>
                  ${privacyNotice?.content?.data?.map(
                    (d) =>
                      `<div class="purpose-container">
                          <p class="purpose-obligation">Requested</p>
                          <div class="purpose-information">
                              <h5>${d?.name}</h5>
                              <span>${d?.description}</span>
                          </div>
                          <div class="purpose-sr">
                              ${d?.softwareResources?.map(
                                (sr, index) =>
                                  `
                                  <div class="purpose-sr-information">
                                      <span class="purpose-sr-information-name">${sr?.name}</span>
                                      <span>${sr?.description}</span>
                                  </div>
                                  `
                              )}
                          </div>
                          <div>
                              ${d?.dataResources?.map(
                                (dt, index) =>
                                  `
                                  <div class="purpose-sr">
                                      <div class="purpose-sr-information">
                                          <span class="purpose-sr-information-name">${dt?.name}</span>
                                          <span>${dt?.description}</span>
                                      </div>
                                  </div>
                                  `
                              )}
                          </div>
                      </div>`
                  )}
              </div>
              <div class="consent-modal-body-email">
                  <h4>Are your using another email for your account on ${
                    privacyNotice?.content?.dataProvider?.legalName
                  }</h4>
                  <p>Please specify if there is another email associated with your account on ${
                    privacyNotice?.content?.dataProvider?.legalName
                  }. Otherwise, indicate that you do not have one.</p>
                  <div class="consent-modal-body-email-inputs">
                      <input type="email" placeholder="Email" id="email-custom" name="email-custom" />
                      <div class="checkbox-wrapper">
                          <input
                              type="checkbox"
                              id="checkbox-trigger"
                              name="checkbox-trigger"
                              class="checkbox-wrapper-input"
                          />
                          <label for="checkbox-trigger" class="checkbox-wrapper-label">
                              <span class="checkbox-wrapper-custom-input">
                                  <svg viewBox="0 0 12 10" height="10px" width="12px">
                                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                  </svg>
                              </span>
                              <span class="checkbox-wrapper-content">I do not have an account on ${
                                privacyNotice?.content?.dataProvider?.legalName
                              }</span>
                          </label>
                      </div>
                  </div>
              </div>
          </div>
          `;

    const modalBodySuccess = `
          <div></div>
      `;

    const newBody = {
      choose: modalBody,
      learnMore: modalBodyLearnMore,
      chooseExchange: modalBodyExchanges,
      choosePrivacyNotice: modalBodyPrivacyNotices,
      legal: modalBodyLegal,
      success: modalBodySuccess,
    };

    return newBody[modalContent];
  }

  renderConsentModalFooter(modalContent) {
    const modalFooterPrivacyNotice = `
        <div class="consent-modal-footer">
            <div class="consent-modal-footer-buttons">
                <button class="btn-next-notice button-disabled" disabled>Next</button>
            </div>
        </div>
      `;

    const modalFooterExchange = `
        <div class="consent-modal-footer">
            <div class="consent-modal-footer-buttons">
                <button class="btn-next button-disabled" disabled>Next</button>
            </div>
        </div>
      `;

    const modalFooterSuccess = `
        <div class="consent-modal-footer">
            <div class="consent-modal-footer-buttons">
                <button class="btn-close">I understand</button>
            </div>
        </div>
      `;

    const modalFooter = `
          <div class="consent-modal-footer">
              <div class="consent-modal-footer-buttons">
                  <slot name="btn-consent"><button id="btn-consent">Agree</button></slot>
                  <slot name="btn-decline"><button id="btn-decline">Decline</button></slot>
              </div>
              <div class="consent-modal-footer-certified">
                  Certified consents by <span class="logo-certified">${logoVT}</span> <b>Visionstrust</b>
              </div>
          </div>
          `;
    return modalContent === "chooseExchange"
      ? modalFooterExchange
      : modalContent === "choosePrivacyNotice"
      ? modalFooterPrivacyNotice
      : modalContent === "success"
      ? modalFooterSuccess
      : modalFooter;
  }

  renderConsentModalExtra(modalContent) {
    const modalExtra = `
              <div class="consent-modal-extra">
                  <button class="btn-choose active">Share my data</button>
                  <button class="btn-learn-more">Learn more</button>
                  <button class="btn-legal">Legal</button>
              </div>
          `;
    return modalContent === "chooseExchange" || modalContent === "success"
      ? '<div class="consent-modal-extra"></div>'
      : modalExtra;
  }

  renderSimpleLoader() {
    return `<span class="simple-loader"></span>`;
  }

  renderLogicButtonConsent(myHTMLElement, privacyNotice, shadowContent) {
    const buttonConsent = myHTMLElement?.querySelector("#btn-consent");
    const switchInputs = myHTMLElement?.querySelectorAll(".switch-input");
    const emailCustom = myHTMLElement?.querySelector("#email-custom");

    buttonConsent?.addEventListener("click", async () => {
      buttonConsent.setAttribute("disabled", "");
      buttonConsent.classList.add("button-disabled");
      const defaultInnerHtml = buttonConsent.innerHTML;
      buttonConsent.innerHTML = this.renderSimpleLoader();
      const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
      const regexEmail = new RegExp(regex);

      const selectData = [];

      switchInputs?.forEach((s) => {
        selectData.push({
          _id: s?.name.split("_")[1],
          checked: s?.checked,
        });
      });

      if (!regexEmail.test(emailCustom?.value)) {
        buttonConsent.removeAttribute("disabled");
        buttonConsent.classList.remove("button-disabled");
        buttonConsent.innerHTML = defaultInnerHtml;
        return alert("Invalid email");
      }

      const payload = {
        privacyNoticeId: privacyNotice?.content?._id,
        userId: this.userIdentifier,
        email: emailCustom?.value || "",
      };

      const post = await fetch(this.consentGrantEndPoint, {
        body: JSON.stringify(payload),
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
      });

      if (!post) {
        throw new Error("Failed to post the current consent");
      }

      setTimeout(() => {
        buttonConsent.removeAttribute("disabled");
        buttonConsent.classList.remove("button-disabled");
        buttonConsent.innerHTML = defaultInnerHtml;
      }, 2000);

      this.modalContent = "success";

      const newHeader = await this.renderConsentModalHeader(
        "",
        this.modalContent
      );
      const newBody = await this.renderConsentModalBody("", this.modalContent);
      const newFooter = await this.renderConsentModalFooter(this.modalContent);
      const newExtra = this.renderConsentModalExtra(this.modalContent);

      shadowContent.header.innerHTML = newHeader;
      shadowContent.body.innerHTML = newBody;
      shadowContent.footer.innerHTML = newFooter;
      shadowContent.extra.innerHTML = newExtra;

      const buttonClose = myHTMLElement.querySelector(".btn-close");

      buttonClose?.addEventListener("click", () => {
        shadowContent.backdrop.style.display = "none";
      });
    });
  }

  renderLogicButtonDecline(myHTMLElement, modalBackdrop) {
    const buttonDecline = myHTMLElement?.querySelector("#btn-decline");

    buttonDecline?.addEventListener("click", () => {
      modalBackdrop.style.display = "none";
    });
  }

  async renderData(privacyNotice, availableExchanges) {
    this.privacyNotice = privacyNotice;
    const font = document.createElement("link");
    font.setAttribute("rel", "stylesheet");
    font.setAttribute(
      "href",
      "https://fonts.googleapis.com/css2?family=KoHo:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
    );
    document.head.appendChild(font);

    // Create modal backdrop
    const modalBackdrop = document.createElement("div");
    modalBackdrop.classList.add("modal-backdrop");
    modalBackdrop.setAttribute("id", "modal-backdrop");
    //Create consent modal
    const consentModal = document.createElement("article");
    consentModal.classList.add("consent-modal");
    consentModal.setAttribute("id", "consent-modal");

    // Create custom button
    const slotButtonOpenModal = document.createElement("slot");
    slotButtonOpenModal.setAttribute("name", "buttonOpenModal");
    const buttonOpenModal = document.createElement("button");
    buttonOpenModal.textContent = "Open Modal";
    buttonOpenModal.setAttribute("id", "button-open-modal");
    slotButtonOpenModal.appendChild(buttonOpenModal);

    if (availableExchanges && !this.privacyNotice) {
      this.modalContent = "chooseExchange";
    }

    // Get the renderings content modal
    const styleModal = this.renderStyleModal();
    const modalBgHeader = this.renderConsentModalBgHeader();
    const modalHeader = this.renderConsentModalHeader(
      this.privacyNotice,
      this.modalContent
    );
    const modalBody = await this.renderConsentModalBody(
      this.privacyNotice,
      this.modalContent
    );
    const modalFooter = this.renderConsentModalFooter(this.modalContent);
    const modalExtra = this.renderConsentModalExtra(this.modalContent);

    consentModal.innerHTML = "";
    consentModal.innerHTML =
      modalBgHeader + modalHeader + modalBody + modalFooter + modalExtra;
    modalBackdrop.appendChild(consentModal);

    // Get element after initialisation of modal content
    const buttonDecline = consentModal.querySelector("#btn-decline");
    const buttonConsent = consentModal.querySelector("#btn-consent");
    const buttonNext = consentModal.querySelector(".btn-next");
    const crossButton = consentModal.querySelector(".consent-modal-close");
    const shadowHeader = consentModal.querySelector(".consent-modal-header");
    const shadowBody = consentModal.querySelector(".consent-modal-body");
    const shadowFooter = consentModal.querySelector(".consent-modal-footer");
    const shadowExtra = consentModal.querySelector(".consent-modal-extra");

    const checkboxTrigger = consentModal.querySelector("#checkbox-trigger");
    const emailCustom = consentModal.querySelector("#email-custom");
    const switchInputs = consentModal.querySelectorAll(".switch-input");

    const footerExtraButtons = consentModal.querySelectorAll(
      ".consent-modal-extra button"
    );
    const contractItems = consentModal.querySelectorAll(".contract-item");

    // Open modal
    slotButtonOpenModal.addEventListener("click", () => {
      modalBackdrop.style.display = "block";
    });

    contractItems?.forEach((item, index) => {
      item.addEventListener("click", () => {
        contractItems.forEach((ci) => ci.classList.remove("contract-active"));
        const currentId = item?.getAttribute("id");
        this.activeExchange = currentId;
        item.classList.add("contract-active");

        if (this.activeExchange) {
          buttonNext.removeAttribute("disabled", "");
          buttonNext.classList.remove("button-disabled");
        }
      });
    });

    buttonNext?.addEventListener("click", async () => {
      buttonNext.setAttribute("disabled", "");
      buttonNext.classList.add("button-disabled");
      const defaultInnerHtml = buttonNext.innerHTML;
      buttonNext.innerHTML = this.renderSimpleLoader();

      const currentExchange = availableExchanges?.exchanges?.find((aexc) =>
        aexc?.contract?.includes(this.activeExchange)
      );

      if (!currentExchange) {
        buttonNext.removeAttribute("disabled");
        buttonNext.classList.remove("button-disabled");
        buttonNext.innerHTML = defaultInnerHtml;
        return;
      }

      this.privacyNoticeEndpoint = currentExchange?.privacyNoticeEndpoint;

      const privacyNoticesEndPoint =
        currentExchange?.privacyNoticeEndpoint?.replace(
          "{userId}",
          this.userIdentifier
        );

      const privacyNotices = await fetch(privacyNoticesEndPoint, {
        headers: {
          Authorization: `Bearer ${this.PDCAdminJWT}`,
        },
      });

      const json = await privacyNotices.json();

      this.privacyNotices = await json;
      this.modalContent = "choosePrivacyNotice";

      const populatePrivacyNotices = await this.getPrivacyNotices(
        this.privacyNotices
      );

      const newHeader = await this.renderConsentModalHeader(
        "",
        this.modalContent
      );
      const newBody = await this.renderConsentModalBody(
        "",
        this.modalContent,
        populatePrivacyNotices
      );
      const newFooter = await this.renderConsentModalFooter(this.modalContent);

      buttonNext.removeAttribute("disabled");
      buttonNext.classList.remove("button-disabled");
      buttonNext.innerHTML = defaultInnerHtml;

      shadowHeader.innerHTML = newHeader;
      shadowBody.innerHTML = newBody;
      shadowFooter.innerHTML = newFooter;

      this.privacyNoticesItems = consentModal.querySelectorAll(
        ".privacy-notice-container"
      );
      const buttonNextNotice = consentModal.querySelector(".btn-next-notice");

      this.privacyNoticesItems?.forEach((item) => {
        item?.addEventListener("click", () => {
          this.privacyNoticesItems?.forEach((pni) =>
            pni?.classList?.remove("privacy-notice-container-active")
          );

          const currentId = item?.getAttribute("id");

          this.activeNotice = currentId;

          item.classList.add("privacy-notice-container-active");
          if (this.activeNotice) {
            buttonNextNotice.removeAttribute("disabled", "");
            buttonNextNotice?.classList.remove("button-disabled");
          }
        });
      });

      buttonNextNotice?.addEventListener("click", async () => {
        buttonNextNotice.setAttribute("disabled", "");
        buttonNextNotice.classList.add("button-disabled");
        const defaultInnerHtml = buttonNextNotice.innerHTML;
        buttonNextNotice.innerHTML = this.renderSimpleLoader();

        const currentUrl = this.availableExchangesEndpoint.split("/consent")[0];

        const getCurrentPrivacyNotice = await fetch(
          `${currentUrl}/consent/${this.userIdentifier}/privacy-notices/${this.activeNotice}`
        );
        const privacyJson = await getCurrentPrivacyNotice.json();

        if (!privacyJson) {
          buttonNextNotice.removeAttribute("disabled");
          buttonNextNotice.classList.remove("button-disabled");
          buttonNextNotice.innerHTML = defaultInnerHtml;
          return;
        }

        this.modalContent = "choose";
        this.privacyNotice = privacyJson;

        const newHeader = await this.renderConsentModalHeader(
          this.privacyNotice,
          this.modalContent
        );
        const newBody = await this.renderConsentModalBody(
          this.privacyNotice,
          this.modalContent
        );
        const newFooter = await this.renderConsentModalFooter(
          this.modalContent
        );
        const newExtra = this.renderConsentModalExtra(this.modalContent);

        buttonNextNotice.removeAttribute("disabled");
        buttonNextNotice.classList.remove("button-disabled");
        buttonNextNotice.innerHTML = defaultInnerHtml;

        shadowHeader.innerHTML = newHeader;
        shadowBody.innerHTML = newBody;
        shadowFooter.innerHTML = newFooter;
        shadowExtra.innerHTML = newExtra;

        const buttonsExtra = consentModal?.querySelectorAll(
          ".consent-modal-extra button"
        );

        buttonsExtra?.forEach((button) => {
          button.addEventListener("click", () => {
            buttonsExtra.forEach((otherButton) => {
              otherButton.classList.remove("active");
            });

            if (button.classList.contains("btn-choose")) {
              this.modalContent = "choose";
            } else if (button.classList.contains("btn-learn-more")) {
              this.modalContent = "learnMore";
            } else if (button.classList.contains("btn-legal")) {
              this.modalContent = "legal";
            }

            button.classList.add("active");

            const newHeader = this.renderConsentModalHeader(
              this.privacyNotice,
              this.modalContent
            );
            const newBody = this.renderConsentModalBody(
              this.privacyNotice,
              this.modalContent
            );
            const newFooter = this.renderConsentModalFooter(this.modalContent);
            shadowHeader.innerHTML = newHeader;
            shadowBody.innerHTML = newBody;
            shadowFooter.innerHTML = newFooter;
            this.renderLogicButtonConsent(consentModal, this.privacyNotice, {
              header: shadowHeader,
              body: shadowBody,
              footer: shadowFooter,
              extra: shadowExtra,
              backdrop: modalBackdrop,
            });
            this.renderLogicButtonDecline(consentModal, modalBackdrop);
          });
        });
        this.renderLogicButtonConsent(consentModal, this.privacyNotice, {
          header: shadowHeader,
          body: shadowBody,
          footer: shadowFooter,
          extra: shadowExtra,
          backdrop: modalBackdrop,
        });
        this.renderLogicButtonDecline(consentModal, modalBackdrop);
      });
    });

    footerExtraButtons?.forEach((button) => {
      button.addEventListener("click", () => {
        footerExtraButtons.forEach((otherButton) => {
          otherButton.classList.remove("active");
        });

        if (button.classList.contains("btn-choose")) {
          this.modalContent = "choose";
        } else if (button.classList.contains("btn-learn-more")) {
          this.modalContent = "learnMore";
        } else if (button.classList.contains("btn-legal")) {
          this.modalContent = "legal";
        }

        button.classList.add("active");

        const newHeader = this.renderConsentModalHeader(
          this.privacyNotice,
          this.modalContent
        );
        const newBody = this.renderConsentModalBody(
          this.privacyNotice,
          this.modalContent
        );
        const newFooter = this.renderConsentModalFooter(this.modalContent);
        shadowHeader.innerHTML = newHeader;
        shadowBody.innerHTML = newBody;
        shadowFooter.innerHTML = newFooter;

        this.renderLogicButtonConsent(consentModal, this.privacyNotice, {
          header: shadowHeader,
          body: shadowBody,
          footer: shadowFooter,
          extra: shadowExtra,
          backdrop: modalBackdrop,
        });
        this.renderLogicButtonDecline(consentModal, modalBackdrop);
      });
    });

    // Close modal with decline button
    buttonDecline?.addEventListener("click", () => {
      modalBackdrop.style.display = "none";
    });
    // Close modal with close cross button
    crossButton?.addEventListener("click", () => {
      modalBackdrop.style.display = "none";
    });

    buttonConsent?.addEventListener("click", async () => {
      buttonConsent.setAttribute("disabled", "");
      buttonConsent.classList.add("button-disabled");
      const defaultInnerHtml = buttonConsent.innerHTML;
      buttonConsent.innerHTML = this.renderSimpleLoader();
      const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
      const regexEmail = new RegExp(regex);

      const selectData = [];

      switchInputs?.forEach((s) => {
        selectData.push({
          _id: s?.name.split("_")[1],
          checked: s?.checked,
        });
      });

      if (!regexEmail.test(emailCustom?.value)) {
        buttonConsent.removeAttribute("disabled");
        buttonConsent.classList.remove("button-disabled");
        buttonConsent.innerHTML = defaultInnerHtml;
        return alert("Invalid email");
      }

      const payload = {
        privacyNoticeId: privacyNotice?.content?._id,
        userId: this.userIdentifier,
        email: emailCustom?.value || "",
      };

      const post = await fetch(this.consentGrantEndPoint, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!post) {
        throw new Error("Failed to post the current consent");
      }

      setTimeout(() => {
        buttonConsent.removeAttribute("disabled");
        buttonConsent.classList.remove("button-disabled");
        buttonConsent.innerHTML = defaultInnerHtml;
      }, 2000);

      this.modalContent = "success";

      const newHeader = await this.renderConsentModalHeader(
        "",
        this.modalContent
      );
      const newBody = await this.renderConsentModalBody("", this.modalContent);
      const newFooter = await this.renderConsentModalFooter(this.modalContent);
      const newExtra = this.renderConsentModalExtra(this.modalContent);

      shadowHeader.innerHTML = newHeader;
      shadowBody.innerHTML = newBody;
      shadowFooter.innerHTML = newFooter;
      shadowExtra.innerHTML = newExtra;

      const buttonClose = consentModal.querySelector(".btn-close");

      buttonClose?.addEventListener("click", () => {
        modalBackdrop.style.display = "none";
      });
    });

    this.shadowRoot.innerHTML = "";
    this.shadowRoot.appendChild(styleModal);
    this.shadowRoot.appendChild(slotButtonOpenModal);
    this.shadowRoot.appendChild(modalBackdrop);
  }
}

customElements.define("consent-modal", ConsentModal);
