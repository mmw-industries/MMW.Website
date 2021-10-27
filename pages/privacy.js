import Layout from "../src/layout/Layout";

const meta = {
    title: "Datenschutz",
    description: "Datenschutzerklärung der MMW Analytics Solutions GmbH.",
    keywords: "MMW, Industries, MMW Industries",
    og_image: "https://mmw.industries/images/data-protection.jpg",
    og_url: "https://mmw.industries/",
};

function Privacy() {
    return (
        <Layout navHoverColor="nav-blue-hover tra-grey-hover"
                meta={meta}
                singlePage
        >
            <section
                id="terms-page"
                className="bg-snow wide-70 inner-page-hero terms-section division"
            >
                <div className="terms-title text-center">
                    <h2 className="h2-md">Datenschutz</h2>
                </div>
                <hr className="divider"/>
                <div className='container col-7'>
                    <div className="row d-flex align-items-center mt-100">
                        <p>
                            Diese Webseite wird betrieben, um Angebote der Institution „MMW ANALYTICS SOLUTIONS“,
                            sowie damit verbundene Informationen und Kontaktmöglichkeiten bereitzustellen.
                            Sofern zweckmäßig werden dabei in voneinander unabhängigen Teilprozessen personenbezogene
                            Daten verarbeitet. In unserem gesamten Geschäftsgebaren gehen wir mit Ihren Daten sehr
                            sorgsam um, und halten uns an die gesetzlichen Vorgaben in der
                            Verarbeitung, Speicherung und Löschung.
                        </p>
                    </div>
                </div>
                <div className='container col-7'>
                    <div className="row d-flex align-items-center pt-50">
                        <h2>Verantwortliche Stelle & Ansprechpartner</h2>
                        <strong>
                            MMW Analytics Solutions GmbH
                        </strong>
                        <p>
                            Aredstraße 11/8<br/>
                            2544 Leobersdorf<br/>
                            Österreich<br/>
                            Firmenbuch: FN 541180d f Landesgericht Wiener Neustadt<br/>
                            UID: ATU76052968<br/>
                            Geschäftsführer: Markus Wenzl & Michael Wenzl<br/>
                        </p>
                        <p style={{paddingTop: 40}}>
                            <b>
                                Tel.:
                            </b>
                            <a href="tel:+43225620442"
                               style={{color: 'darkblue', marginLeft: 10}}
                            >
                                <b>
                                    +43 (0)2256 20442
                                </b>
                            </a>
                        </p>
                        <p>
                            <b>
                                E-Mail:
                            </b>
                            <a href="mailto:office@mmw.industries"
                               style={{color: 'darkblue', marginLeft: 10}}
                            >
                                <b>
                                    office@mmw.industries
                                </b>
                            </a>
                        </p>
                    </div>
                </div>
                <div className='container col-7'>
                    <div className="row d-flex align-items-center pt-100">
                        <h2>Allgemeines zur Verwendung von Daten</h2>
                        <p>
                            Wir erheben Daten ausschließlich Zweckgebunden und auf Basis der rechtlichen Bestimmungen
                            gem. Art. 6 ff DSGVO. Bei der Nutzung gewisser Dienster unserer Webseite können unter
                            anderem Daten wie zum Beispiel Vor- und Nachname, Anschrift, Telefonnummer oder auch die
                            Email-Adresse erhoben werden. Dies ist insbesondere bei Anfragen in Bezug auf unserer
                            Dienstleistungen notwendig, um den Kontakt durch unsere Mitarbeiter herstellen zu können.
                            Diese Daten werden unter Einsatz aller notwendiger organisatorischer und technischer
                            Sicherheitsmassnahmen vor Missbrauch geschützt. Dies bedingt unter anderem der Einsatz von
                            aktueller Software, Verwendung von Pseudonymisierungsmassnahmen oder auch Verschlüsselung
                            beim Datentransfers über HTTPS (SSL-Zertifikat).
                        </p>
                    </div>
                </div>
                <div className='container col-7'>
                    <div className="row d-flex align-items-center pt-100">
                        <h2>Kontaktaufnahme in der Allgemeinen Geschäftsgebarung</h2>
                        <p>
                            Wenn Sie mit uns zum Zwecke der Konsumation unserer Leistungen Kontakt aufnehmen, speichern
                            wir ihre Kontaktdaten auf Basis Art. 6 Abs 1 lit b DSGVO, um eine Vertragserfüllung zu
                            gewährleisten. Insofern im Zuge der Kommunikation kein Vertrag zustande kommt, werden ihre
                            Daten lediglich auszugsweise und im notwendigen Maße zur Dokumentation der Korrespondenz
                            gespeichert und nach einer entsprechenden Zeitspanne wieder gelöscht.
                        </p>
                    </div>
                </div>
                <div className='container col-7'>
                    <div className="row d-flex align-items-center pt-100">
                        <h2>Newsletter und andere Werbemaßnahmen</h2>
                        <p>
                            Um unsere Kunden regelmäßig über laufende Angebote, Workshops, Partner und sonstige Events
                            rund um unser Unternehmen zu informieren, bieten wir einen regelmäßigen elektronischen
                            Informationsservice „Newsletter“ an. Die Nutzung dieses Service ist abseits aller
                            Dienstleistungen möglich und erfordert lediglich die Preisgabe ihrer Email-Adresse, um die
                            dementsprechenden Informationen zu erhalten. Email-Adressen, die wir zu diesem Zwecke
                            verarbeiten, basieren auf der Rechtsgrundlage gem. Art. 6 Abs 1 lit a DSGVO und können
                            jederzeit widerrufen werden. Ihre Daten werden dabei zu keiner Zeit an Dritte weitergegeben.
                            Wenn Sie einen derartigen Service in Anspruch nehmen wollen oder weitere Fragen zu diesem
                            Thema an uns richten möchten, können Sie uns jederzeit unter accounting@mmw.industries
                            kontaktieren.
                        </p>
                    </div>
                </div>
                <div className='container col-7'>
                    <div className="row d-flex align-items-center pt-100">
                        <h2>Automatische Erfassung von Daten</h2>
                        <p>
                            Beim Besuch unserer Webseite, werden automatisch Informationen seitens unseres
                            Hosting-Anbieters World4You.com gespeichert. Es handelt sich dabei unter anderem um
                            Server-Logfiles, welche Name der Webseite/Unterseite, Uhrzeit, Datum und Dateien des Abrufs
                            erfassen. Diese Daten werden in der Regel zur systemischen und kategorischen Auswertung
                            verwendet und dienen nur in Ausnahmefällen, speziell aber im Falle rechtlicher
                            Streitigkeiten, als Evidenz. Wenn Sie beim Besuch unserer Webseite keine Funktionen nutzen,
                            bei denen Sie ihre Email-Adresse oder andere Daten angeben müssen, so sind bei Verlassen der
                            Seite keine personenbezogenen Daten von Ihnen erfasst worden.
                        </p>
                    </div>
                </div>
                <div className='container col-7'>
                    <div className="row d-flex align-items-center pt-100">
                        <h2>Cookies</h2>
                        <p>
                            Unsere Website verwendet HTTP-Cookies um nutzerspezifische Daten zu speichern. Ein Cookie
                            ist ein kurzes Datenpaket, welches zwischen Webbrowser und Webserver ausgetauscht wird. Man
                            unterscheidet mehrere Kategorien von Cookies: unbedingt notwendige Cookies um grundlegende
                            Funktionen der Website sicherzustellen, funktionelle Cookies um die Leistung der Webseite
                            sicherzustellen und zielorientierte Cookies um das Benutzererlebnis zu verbessern. Wir
                            nutzen Cookies, um unsere Webseite nutzerfreundlicher zu gestalten. Einige Cookies bleiben
                            auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser
                            beim nächsten Besuch wiederzuerkennen. Wenn Sie dies nicht wünschen, so können Sie Ihren
                            Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur
                            im Einzelfall erlauben. Sie können jederzeit Cookies, die sich bereits auf Ihrem Computer
                            befinden, löschen oder Cookies deaktivieren. Wenn Sie generell nicht gestatten, Cookies zu
                            nutzen, d.h. diese per Browsereinstellung deaktivieren, können manche Funktionen und Seiten
                            nicht wie erwartet funktionieren.
                        </p>
                    </div>
                </div>
                <div className='container col-7'>
                    <div className="row d-flex align-items-center pt-100">
                        <h2>Google Analytics</h2>
                        <p>
                            Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“).
                            Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert
                            werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch das
                            Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an
                            einen Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung
                            der IP-Anonymisierung auf dieser Website, wird Ihre IP-Adresse von Google jedoch innerhalb
                            von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens
                            über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle
                            IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des
                            Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der
                            Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere
                            mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem
                            Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser
                            übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Sie können
                            die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software
                            verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
                            sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber
                            hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website
                            bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch
                            Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin
                            herunterladen und installieren. Sie können die Erfassung durch Google Analytics verhindern,
                            indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, das die zukünftige
                            Erfassung Ihrer Daten beim Besuch dieser Website verhindert: Google Analytics deaktivieren
                            Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter Google
                            Analytics Terms bzw. unter Google Policies. Wir weisen Sie darauf hin, dass auf dieser
                            Website Google Analytics um den Code „anonymizeIp“ erweitert wurde, um eine anonymisierte
                            Erfassung von IP-Adressen (sog. IP-Masking) zu gewährleisten. Wir nutzen Google Analytics
                            zudem dazu, Daten aus AdWords zu statistischen Zwecken auszuwerten.
                        </p>
                    </div>
                </div>
                <div className='container col-7'>
                    <div className="row d-flex align-items-center pt-100">
                        <h2>Google Analytics – Berichte zu Demografischen Merkmalen und Interessen</h2>
                        <p>
                            Wir haben in Google Analytics die Funktionen für Werbeberichte eingeschaltet. Die Berichte
                            zu demografischen Merkmalen und Interessen enthalten Angaben zu Alter, Geschlecht und
                            Interessen. Damit können wir uns – ohne diese Daten einzelnen Personen zuordnen zu können –
                            ein besseres Bild von unseren Nutzern machen. Mehr über die Werbefunktionen erfahren Sie auf
                            Support Google. Sie können die Nutzung der Aktivitäten und Informationen Ihres Google Kontos
                            unter “Einstellungen für Werbung” auf Adssettings Google per Checkbox beenden.
                        </p>
                    </div>
                </div>
                <div className='container col-7'>
                    <div className="row d-flex align-items-center pt-100">
                        <h2>Anonymize-IP</h2>
                        <p>
                            Wir haben auf dieser Webseite die IP-Adressen-Anonymisierung von Google Analytics
                            implementiert. Diese Funktion wurde von Google entwickelt, damit diese Webseite die
                            geltenden Datenschutzbestimmungen und Empfehlungen der lokalen Datenschutzbehörden einhalten
                            kann, wenn diese eine Speicherung der vollständigen IP-Adresse untersagen. Die
                            Anonymisierung bzw. Maskierung der IP findet statt, sobald die IP-Adressen im Google
                            Analytics-Datenerfassungsnetzwerk eintreffen und bevor eine Speicherung oder Verarbeitung
                            der Daten stattfindet. Mehr Informationen zur IP-Anonymisierung finden Sie auf Support
                            Google.
                        </p>
                    </div>
                </div>
                <div className='container col-7'>
                    <div className="row d-flex align-items-center pt-100">
                        <h2>Einbindung von Diensten und Inhalten Dritter</h2>
                        <p>
                            Innerhalb dieses Onlineangebotes Inhalte Dritter, wie zum Beispiel Videos von YouTube,
                            Kartenmaterial von Google-Maps, RSS-Feeds oder Grafiken von anderen Webseiten eingebunden
                            werden. Dies setzt immer voraus, dass die Anbieter dieser Inhalte (nachfolgend bezeichnet
                            als „Dritt-Anbieter“) die IP-Adresse der Nutzer wahrnehmen. Denn ohne die IP-Adresse könnten
                            sie die Inhalte nicht an den Browser des jeweiligen Nutzers senden. Die IP-Adresse ist damit
                            für die Darstellung dieser Inhalte erforderlich. Wir bemühen uns, nur solche Inhalte zu
                            verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung dieser Inhalte
                            verwenden.
                        </p>
                    </div>
                </div>
                <div className='container col-7'>
                    <div className="row d-flex align-items-center pt-100">
                        <h2>Ihre Rechte</h2>
                        <p>
                            Sie haben das Recht, jederzeit Auskunft über Ihre bei uns gespeicherten personenbezogenen
                            Daten zu erhalten. Ebenso haben Sie das Recht auf Berichtigung, Sperrung oder, abgesehen von
                            der vorgeschriebenen Datenspeicherung zur Geschäftsabwicklung, Löschung Ihrer
                            personenbezogenen Daten. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
                            Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise
                            verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist
                            dies die Datenschutzbehörde, deren Webseiten Sie unter dsb.gv.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Privacy;