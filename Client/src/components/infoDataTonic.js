module.exports = {
    overview: {
        issuesResolved: {
            title: "security Issues Resolved",
            amount: 5,
        },
        inspectionCoverage: {
            title: "Inspection Coverage",
            databases: {
                title: "Databases",
                current: 20,
                total: 50
            },
            tables: {
                title: "Tables",
                current: 20,
                total: 50
            },
            files: {
                title: "Files",
                current: 130,
                total: 8000
            }
        },
        sensitiveDataLocations: {
            title: "Sensitive Data Location",
            dataSources: 3,
            databases: 5,
            tables: 8,
            files: 7
        }
    },
    dataDistChart: {
        key: 1000,
        title: "Sensitive Data Distribution by Data Source",
        width: 600,
        height: 300,
        dataset: [
            {
                name: "DS1",
                swift_code: 3,
                email: 2,
                US_Bank_Acc_Num: 5,
                Phone: 4,
                SSN: 12,
                US_Passport: 1,
                ABA_Routing: 2,
                DOB: 2,
                Credit_Card: 3
            },
            {
                name: "DS2",
                swift_code: 3,
                email: 2,
                US_Bank_Acc_Num: 5,
                Phone: 4,
                SSN: 12,
                US_Passport: 2,
                ABA_Routing: 2,
                DOB: 2,
                Credit_Card: 3
            },
            {
                name: "DS3",
                swift_code: 4,
                email: 3,
                US_Bank_Acc_Num: 6,
                Phone: 5,
                SSN: 13,
                US_Passport: 2,
                ABA_Routing: 2,
                DOB: 2,
                Credit_Card: 3
            },
            {
                name: "DS4",
                swift_code: 3,
                email: 3,
                US_Bank_Acc_Num: 6,
                Phone: 5,
                SSN: 12,
                US_Passport: 2,
                ABA_Routing: 2,
                DOB: 2,
                Credit_Card: 3
            },
            {
                name: "DS5",
                swift_code: 2,
                email: 2,
                US_Bank_Acc_Num: 4,
                Phone: 4,
                SSN: 9,
                US_Passport: 2,
                ABA_Routing: 2,
                DOB: 2,
                Credit_Card: 3
            },
            {
                name: "DS6",
                swift_code: 4,
                email: 3,
                US_Bank_Acc_Num: 5,
                Phone: 5,
                SSN: 10,
                US_Passport: 2,
                ABA_Routing: 2,
                DOB: 2,
                Credit_Card: 3
            }
        ],
    },
    tinyGraphs: {
        DonutCharts: [
            {
                title: "Sensitive Info by Type",
                data: [
                    {
                        name: "IBAN",
                        value: 2
                    },
                    {
                        name: "Swift Code",
                        value: 4
                    },
                    {
                        name: "Email",
                        value: 8
                    },
                    {
                        name: "US Bank Acc. Num.",
                        value: 4
                    },
                    {
                        name: "Phone",
                        value: 5
                    },
                    {
                        name: "SSN",
                        value: 2
                    },
                    {
                        name: "US Passport",
                        value: 4
                    },
                    {
                        name: "ABA Routing",
                        value: 5
                    },
                    {
                        name: "DOB",
                        value: 4
                    },
                    {
                        name: "Credit Card",
                        value: 3
                    }
                ],
                key: 1
            },
            {
                data: [
                    {
                        name: "PII",
                        value: 9
                    },
                    {
                        name: "HIPAA",
                        value: 4
                    },
                    {
                        name: "FERPA",
                        value: 8
                    },
                    {
                        name: "Class3",
                        value: 4
                    },
                    {
                        name: "Class4",
                        value: 5
                    },
                    {
                        name: "Class5",
                        value: 2
                    },
                    {
                        name: "Class6",
                        value: 4
                    },
                    {
                        name: "Class7",
                        value: 5
                    },
                    {
                        name: "PCI",
                        value: 4
                    },
                    {
                        name: "IIYWASWIWTBOTSA4AATWUOTDTMIHCIMFH",
                        value: 3
                    }
                ],
                title: "Sensitive Info by Category",
                key: 2
            }
        ],
        BarCharts: [
            {
                data: [
                    {
                        name: "DS1",
                        value: "75"
                    },
                    {
                        name: "DS2",
                        value: "43"
                    },
                    {
                        name: "DS3",
                        value: "94"
                    },
                    {
                        name: "DS4",
                        value: "38"
                    }
                ],
                title: "Inspection Coverage",
                description: "(Inspection Coverage %)",
                id: 3
            },
            {
                data: [
                    {
                        name: "DS1",
                        value: "22"
                    },
                    {
                        name: "DS2",
                        value: "14"
                    },
                    {
                        name: "DS3",
                        value: "28"
                    },
                    {
                        name: "DS4",
                        value: "12"
                    }
                ],
                title: "Sensitive Info by Type",
                description: "(Count of Unique Sensitive Info Types)",
                id: 4
            },
            {
                data: [
                    {
                        name: "DS1",
                        value: "22"
                    },
                    {
                        name: "DS2",
                        value: "14"
                    },
                    {
                        name: "DS3",
                        value: "28"
                    },
                    {
                        name: "DS4",
                        value: "12"
                    },
                    {
                        name: "DS5",
                        value: "16"
                    },
                    {
                        name: "DS6",
                        value: "9"
                    },
                    {
                        name: "DS7",
                        value: "8"
                    },
                    {
                        name: "DSLite",
                        value: "2"
                    },
                    {
                        name: "DS1/2",
                        value: "7"
                    }
                ],
                title: "Sensitive information by Category",
                description: "(Count of unique sensitive InfoType Categories)",
                id: 5
            }
        ],
        StackedBars: [
            {
                data: [
                    {
                        name: "DS1",
                        class1: 5000,
                        class2: 20000,
                        class3: 30000
                    },
                    {
                        name: "DS2",
                        class1: 5000,
                        class2: 20000,
                        class3: 30000
                    },
                    {
                        name: "DS3",
                        class1: 6000,
                        class2: 20000,
                        class3: 29000
                    },
                    {
                        name: "DS4",
                        class1: 10000,
                        class2: 20000,
                        class3: 25000
                    }
                ],
                title: "Sensitive Data Record Count",
                description: "(Count-Records/Rows Containing Sensitive Info)",
                id: 6
            }
        ]
    }
}
