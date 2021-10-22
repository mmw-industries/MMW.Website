import Link from "next/link";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

const groups = [
    {
        header: "Qualitätssicherung",
        items: [
            {
                title: 'MapQS',
                link: '/products/mapqs'
            },
            {
                title: 'OBCC',
                link: ''
            }
        ]
    },
    {
        header: "Gasmischer",
        items: [
            {
                title: 'KM-M Serie',
                link: ''
            },
            {
                title: 'KM-M+ Serie',
                link: ''
            },
            {
                title: 'KM-MEM Serie',
                link: ''
            },
            {
                title: 'KM-MEM+ Serie',
                link: ''
            },
            {
                title: 'MG-MEM Serie',
                link: ''
            },
            {
                title: 'KM-MEM+ Serie',
                link: ''
            }
        ]
    },
    {
        header: "Gasanalyse Portable",
        items: [
            {
                title: "OXYBABY® Serie",
                link: ''
            },
            {
                title: "OXYBABY® Druckgeführt Serie",
                link: ''
            },
            {
                title: "OXYBABY® MED Serie",
                link: ''
            },
            {
                title: "OXYBABY® Zubehör",
                link: ''
            },
            {
                title: "Mapy 4.0 Serie",
                link: ''
            },
            {
                title: "PA 7.0 Serie",
                link: ''
            },
            {
                title: "OXYBEAM",
                link: ''
            },
            {
                title: "MFA 9000",
                link: ''
            }
        ]
    },
    {
        header: "Gasanalyse Inline",
        items: [
            {
                title: "KM Mapy Serie",
                link: ''
            },
            {
                title: "Mapy 4.0 LE",
                link: ''
            },
            {
                title: "KD",
                link: ''
            },
            {
                title: "Mapy Vac",
                link: ''
            }
        ]
    },
    {
        header: "Dichtheitsprüfung",
        items: [
            {
                title: "LEAK-MASTER® MapMax",
                link: ''
            },
            {
                title: "LEAK-MASTER® MapMax Compact",
                link: ''
            },
            {
                title: "LEAK-MASTER® Pro",
                link: ''
            },
            {
                title: "LEAK-MASTER® Easy",
                link: ''
            },
            {
                title: "LEAK-MASTER® Easy Plus",
                link: ''
            }
        ]
    },
    {
        header: "Raumluftüberwachung",
        items: [
            {
                title: "RLA 100",
                link: ''
            },
            {
                title: "RLA Compact",
                link: ''
            },
            {
                title: "RLA Multichannel",
                link: ''
            }
        ]
    },
    {
        header: "Feuchtemessung",
        items: [
            {
                title: "HYDROBABY",
                link: ''
            },
            {
                title: "MFA H20",
                link: ''
            }
        ]
    },
    {
        header: "Druckregler",
        items: [
            {
                title: "Domdruckregler",
                link: ''
            },
            {
                title: "Dom Vordruckregler",
                link: ''
            },
            {
                title: "Regelstationen",
                link: ''
            },
            {
                title: "Federbelastete Druckregler",
                link: ''
            },
            {
                title: "Entnahmestellen",
                link: ''
            }
        ]
    }
];

function HeaderMenuProducts2({mobileMenuToggle, toggleMenu}) {
    return (
        <li className="mg_link">
            <span
                className={`wsmenu-click ${
                    mobileMenuToggle === "home" ? "ws-activearrow" : ""
                }`}
                onClick={() => toggleMenu("home")}
            >
                <i className="wsmenu-arrow"/>
            </span>
            <Link href="#">
                <a>
                    Produkte <span className="wsarrow"/>
                </a>
            </Link>
            <div
                className="wsmegamenu w-75 clearfix"
                style={{
                    display: mobileMenuToggle === "home" ? "block" : "",
                }}
            >
                <div>
                    <Tabs>
                        <TabList>
                            {groups.map(group => {
                                return (
                                    <Tab>
                                        <p>{group.header}</p>
                                    </Tab>
                                )
                            })}
                        </TabList>
                        {groups.map(group => {
                            return (
                                <TabPanel>
                                    <div className="menu-tabs__panel-content">
                                        <ul className="col-lg-6 link-list ml-10">
                                        {group.items.map(item => {
                                            return (
                                                <li className="fst-li">
                                                    <Link href={item.link}>
                                                        {item.title}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                        </ul>
                                    </div>
                                </TabPanel>
                            )
                        })}
                    </Tabs>
                </div>
            </div>
        </li>
    )
}

export default HeaderMenuProducts2;