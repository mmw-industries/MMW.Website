import Link from "next/link";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {MenuProductsList} from '../pageComponents/products/MenuProductsList'

function HeaderMenuProducts({mobileMenuToggle, toggleMenu}) {
    return (
        <li className="mg_link d-none d-lg-flex">
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
                className="wsmegamenu w-80 clearfix"
                style={{
                    display: mobileMenuToggle === "home" ? "block" : "",
                }}
            >
                <div>
                    <Link href="/products">
                        <h4 style={{paddingLeft: 5, paddingTop: 10, paddingBottom: 0, cursor: 'pointer'}}>
                            Produktübersicht
                        </h4>
                    </Link>
                    <hr style={{marginLeft: -10, marginRight: -10, color: 'gray'}}/>
                    <Tabs>
                        <TabList>
                            {MenuProductsList.map(group => {
                                return (
                                    <Tab key={group.header}>
                                        <p>{group.header}</p>
                                    </Tab>
                                )
                            })}
                        </TabList>
                        {MenuProductsList.map(group => {
                            return (
                                <TabPanel key={group.header}>
                                    <div
                                        className="menu-tabs__panel-content d-flex flex-wrap"
                                        style={{rowGap: 40}}
                                    >
                                        {group.items.map(itemsGroup => {
                                            return (
                                                <ul key={itemsGroup.header}
                                                    className="col-md-12 col-lg-4"
                                                    style={{textAlign: 'left'}}
                                                >
                                                    <h6>
                                                        {itemsGroup.header}
                                                    </h6>
                                                    {itemsGroup.items.map(item => {
                                                        return (
                                                            <li key={item.title}
                                                                style={{paddingLeft: 5}}
                                                            >
                                                                <Link
                                                                    href={item.link}
                                                                >
                                                                    {item.title}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            )
                                        })}
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

export default HeaderMenuProducts;