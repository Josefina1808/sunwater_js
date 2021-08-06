const HomeComponent = {
    render: () => {
        return `
        <section class="solarizar">

            <h2>SOLARIZAR EL AGUA</h2>
            <div class="solarizar__content">
                <div class="solarizar__content--text">
                    <p>Disfruta los beneficios del agua en su estado original. Cuando los rayos del sol atraviesan el
                        vidrio azul, el agua obtiene una graduación de 7mil grados Kelvin. Esa fue la graduación que
                        tuvo la
                        tierra al ser creada y el agua que hoy tomamos estaba ahí.</p>
                    <p>Llena tus botellas azules (con geometrías sagradas y palabras amorosas) con el agua que consumes
                        a
                        diario. Preferentemente directa del grifo o filtro, no plástico. Déjalas sin tapa para que
                        evapore
                        el cloro, cúbrelas con una servilleta de papel o gasa para que no absorba otra energía. En lo
                        posible, pon música para armonizar el agua y el ambiente en que están. Usa frecuencia 432 hz,
                        es
                        la nueva frecuencia de la tierra, o bien frecuencias de Solfeggio. Puedes ver nuestras playlists
                        recomendadas en la <a href="html/galeria.html" target="_blank">galería musical</a>. Deja las
                        botellas expuestas al sol por al menos 3 horas, no
                        hay
                        máximo de tiempo, puedes dejarlas durante la noche si lo deseas. Una vez que las retiras del
                        sol,
                        esa vibración se mantiene por 24 horas. Puedes guardarla en el refrigerador y tomarla fría.
                    </p>
                    <p>Utiliza esta agua cargada de la energía del sol para beber, cocinar, para regar las plantas,
                        etc.
                        El agua que pasó por este proceso tiene la memoria de crear vida Recuerda que somos 80 % agua.
                        Con
                        el correr de los días, notarás la diferencia...</p>
                </div>
                <div class="solarizar__content--img img_radius"></div>

            </div>

        </section>

        <section class="codificar col-12">

            <h2>CODIFICAR EL AGUA</h2>
            <div class="codificar__content">
                <div class="codificar__content--text">
                    <p>
                        Armoniza el agua con Geometría Sagrada, la Flor de la Vida y Metatrón.
                        Estos patrones, junto a la palabra que elijas, le darán la información a las moléculas del
                        agua que luego será transmitida a tus células y eso recibirás en tu vida. Los pasos para
                        codificar tu agua son:

                    </p>
                    <ol>
                        <li>1. Elegir una <a href="#geometria-sagrada">geometría sagrada</a>, La Flor de la
                            Vida
                            o Metatrón.</li>
                        <li>2. <a href="#intencionar">Intencionar el agua</a> , debes elegir una palabra unida a la
                            frase
                            "Yosoy...". Por ejemplo: YoSoyCoherencia.</li>
                    </ol>
                </div>
                <div class="codificar__content--img img_radius"></div>
            </div>

            <article>

                <div class="geometria">
                    <h3 id="#geometria-sagrada">Geometría sagrada</h3>

                    <div class="geometria__content">

                        <div class="geometria__content--img img_radius" id="flor">
                            <a class="geometria__content--img--text"
                                href="https://es.wikipedia.org/wiki/Flor_de_la_Vida" target="_blank">Flor de la Vida</a>
                        </div>

                        <div class="geometria__content--img img_radius" id="metatron">
                            <a class="geometria__content--img--text"
                                href="https://en.wikipedia.org/wiki/Metatron#:~:text=In%20folkloristic%20tradition%2C%20he%20is,his%20transformation%20into%20an%20angel."
                                target="_blank">Metatrón</a>
                        </div>
                    </div>
                </div>
            </article>

            <article>

                <div class="intencionar">
                    <h3 id="#intencionar">Intecionar el agua</h3>

                    <div class="intencionar__content">

                        <p class="intencionar__content--text">
                            Las palabras que elijas son las que determinarán su codificación. Podés elegir entre: Amor,
                            Salud, Gracias, Balance, Equilibrio, Sabiduría, Abundancia, Coherencia, Conciencia y YoSoy.
                            YoSoy puede ir combinada con cualquiera de las anteriores o simplemente sola. No hay una
                            regla de palabras, simplemente las que desees son las correctas e indicadas para vos.
                        </p>
                        <div class="intencionar__content--img img_radius"></div>

                    </div>
                </div>

            </article>
        </section>
        `
    }
}
const NosotrosComponent = {
    render: () => {
        return `
        <section class="historia">

        <h2>Nuestra historia</h2>

        <div class="historia__content">
            <div class="historia__content--text">
                <p>SunWater nació ofcialmente en octubre del 2020, durante la cuarentena. Pero la idea de crear una
                    marca que transmita la importanica de la solarización del agua ya había nacido años atrás.
                    Pero los meses de encierro debidos al covid permitieron llevar acabo aquella idea a lo que hoy
                    conocemos como SunWater.</p>
                <p>El desafío de iniciar el empredimiento no fue nada fácil pero la pasión y amor por transmitir los
                    infinitos beneficios de la solarización del agua eran más grandes que aquella incertidumbre. Mi
                    gran
                    mentora fue Carolina, mi hermana y maestra, quién me transmitió su sabios conocimientos sobre la
                    solarización.</p>
                <p>Actualmente, destrás de SunWater hay una sola persona, yo, Rachael. Esto recién empieza y estoy
                    feliz de todo lo logrado hasta hoy con Sunwater. Sé que quedan muchos años de crecimiento por
                    delante,
                    y espero te sumes conmigo en este camino.</p>
            </div>
            <div class="historia__content--img img_radius"></div>
        </div>
    </section>

    <section class="pilares">
        <div>

            <h2>Pilares</h2>

            <div class="pilares__content col-xxl-12">

                <div class="pilares__content--valores">
                    <img src="../img/calidad.svg" alt="">
                    <h3>Calidad</h3>
                </div>
                <div class="pilares__content--valores">
                    <img src="../img/amor.svg" alt="">
                    <h3>Amor</h3>
                </div>
                <div class="pilares__content--valores">
                    <img src="../img/team_work.svg" alt="">
                    <h3>Trabajo en equipo</h3>
                </div>

            </div>

        </div>
    </section>
        `
    }
}
const GaleriaComponent = {
    render: () => {
        return `
        <section class="galeria-fotos">

        <h2>GALERÍA DE FOTOS</h2>

        <div class="galeria-fotos__content">

            <img src="../img/1.jpg" alt="botellas azules para solarizar agua">
            <img src="../img/2.jpg" alt="agua">
            <img src="../img/3.jpg" alt="botellas azules para solarizar agua">
            <img src="../img/4.jpg" alt="botellas azules para solarizar agua">
            <img src="../img/5.jpg" alt="botellas azules para solarizar agua">
            <img src="../img/6.jpg" alt="botellas azules para solarizar agua">
            <img src="../img/7.jpg" alt="botellas azules para solarizar agua">
            <img src="../img/8.jpg" alt="botellas azules para solarizar agua">
            <img src="../img/9.jpg" alt="botellas azules para solarizar agua">
            <img src="../img/10.jpg" alt="botellas azules para solarizar agua">
            <img src="../img/11.jpg" alt="botellas azules para solarizar agua">
            <img src="../img/12.jpg" alt="botellas azules para solarizar agua">
            <img src="../img/13.jpg" alt="botellas azules para solarizar agua">
            <img src="../img/14.jpg" alt="botellas azules para solarizar agua">
            <img src="../img/15.jpg" alt="botellas azules para solarizar agua">

        </div>

    </section>

    <section class="galeria-musical">

        <h2 id="playlist_432hz">GALERÍA MUSICAL</h2>

        <div class="galeria-musical__spotify">
            <div>
                <iframe src="https://open.spotify.com/embed/album/50fiKeo6rrlx59k0Wd14nt" width="300" height="380"
                    frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
            <div>
                <iframe src="https://open.spotify.com/embed/album/075EtImHqtDYPvYcypAGNQ" width="300" height="380"
                    frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>
            <div>
                <iframe src="https://open.spotify.com/embed/playlist/1Upphcq8Euc3IpsIhuCnkw" width="300"
                    height="388" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </div>

    </section>
        `
    }
}
const FaqComponent = {
    render: () => {
        return `
        <section class="faq__preguntas">

            <h2>PREGUNTAS</h2>

            <div class="accordion accordion-flush" id="faq__accordion">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="Pregunta_1">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#respuesta_1" aria-expanded="false" aria-controls="flush-collapseOne">
                            Métodos de pago
                        </button>
                    </h2>
                    <div id="respuesta_1" class="accordion-collapse collapse" aria-labelledby="Pregunta_1"
                        data-bs-parent="#faq__accordion">
                        <div class="accordion-body">Recibimos transferencia bancaria, todas las tarjetas de crédito y
                            débito
                            aceptadas por mercado pago y efectivo en el punto de retiro localizado en Buenos
                            Aires, Recolta.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="Pregunta_2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#respuesta_2" aria-expanded="false" aria-controls="flush-collapseThree">
                            Formas de envío
                        </button>
                    </h2>
                    <div id="respuesta_2" class="accordion-collapse collapse" aria-labelledby="Pregunta_2"
                        data-bs-parent="#faq__accordion">
                        <div class="accordion-body">Dentro de CABA y GBA nos manejamos con mensajería directa, también
                            podés pasar por nuestro pickup point en Recoleta. Envíos al interior los hacemos a través de
                            Andreani.</div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="pregunta_3">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#respuesta_3" aria-expanded="false" aria-controls="respuesta_3">
                                ¿Hacés envíos al interior?
                            </button>
                        </h2>
                        <div id="respuesta_3" class="accordion-collapse collapse" aria-labelledby="pregunta_3"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Sí, hacemos envíos a todo el país mediante Andreani. La compra
                                mínima para envíos al interiro es de 6 botellas.</div>
                        </div>
                    </div>

                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="Pregunta_4">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#respuesta_4" aria-expanded="false" aria-controls="flush-collapseThree">
                            ¿Cómo obtengo mi botella?
                        </button>
                    </h2>
                    <div id="respuesta_4" class="accordion-collapse collapse" aria-labelledby="Pregunta_4"
                        data-bs-parent="#faq__accordion">
                        <div class="accordion-body">Hablanos por <a href="https://wa.me/5491153192246"
                                target="_blanck">WhatsApp</a> o por <a href="https://www.instagram.com/sunwater.ar/"
                                target="_blank">Instagram</a> para coordinar la compra.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="Pregunta_5">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#respuesta_5" aria-expanded="false" aria-controls="flush-collapseThree">
                            ¿Cómo solarizo el agua?
                        </button>
                    </h2>
                    <div id="respuesta_5" class="accordion-collapse collapse" aria-labelledby="Pregunta_5"
                        data-bs-parent="#faq__accordion">
                        <div class="accordion-body">Llena tus botellas azules con el agua que consumes a diario. Preferentemente directa del grifo o filtro, no
                            plástico. Déjalas sin tapa para que evapore el cloro, cúbrelas con una servilleta de
                            papel o gasa. En lo posible, pon música para armonizar el
                            agua y el ambiente en que están. Usa frecuencia 432 hz, es la nueva frecuencia de la
                            tierra, o bien frecuencias de Solfeggio. Deja las botellas expuestas al sol por al menos 3 horas, no hay máximo de
                            tiempo, puedes dejarlas durante la noche si lo deseas. Una vez que las retiras del sol, esa
                            vibración se mantiene por 24 horas. Puedes guardarla en el refrigerador y tomarla fría.
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section class="consulta">

            <div class="row justify-content-center">
                <h2>¿NO ENCONTRASTE TU PREGUNTA?</h2>
            </div>
            <div class="row justify-content-center consulta__content">
                <div class="d-none d-md-block col-md-4 consulta__content--img"></div>
                <div class="col-12 col-md-8">
                    <div class="consulta__content--text">
                        <p>Si no encontraste tu respuestas en las preguntas anteriores. No dudes en contactarnos para
                            sacarte tu duda, estaremos felices de responderte. Haciedno click en el botón a continuación
                            podés
                            dirigirte a la sección contacto.
                        </p>
                    </div>
                    <div>
                        <button class="consulta__content--buttom"><a href="contacto.html">ENVIAR CONSULTA</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        `
    }
}
const ContactoComponent = {
    render: () => {
        return `
        <section class="contacto container">

            <div class="contacto__texto">
                <h2>CONTÁCTANOS</h2>
                <p>Podemos hablar por <a href="https://wa.me/5491153192246" target="_blanck">WhatsApp</a> o
                    rellenar el formulario a continuación y nosotros nos contacteremos con vos.</p>
            </div>

            <div class="contacto__form">
                <form action="">
                    
                    <div class="mb-3">
                        <label clsss="form-label" for="nombre">NOMBRE</label>
                        <input  class="form-control" type="text" id="nombre" name="nombre" placeholder="Ingresar nombre">
                    </div>

                    <div class="mb-3">
                        <label clsss="form-label" for="apellido">APELLIDO</label>
                        <input class="form-control" type="text" id="apellido" name="apellido" placeholder="Ingrese apellido">
                    </div>

                    <div class="mb-3">
                        <label clsss="form-label" for="fecha_nacimiento">CUMPLEAÑOS</label>
                        <input class="form-control" type="date" name="fecha_nacimiento" id="fecha_nacimiento">
                    </div>

                    <div class="mb-3">
                        <label clsss="form-label" for="phone">CELULAR</label>
                        <input class="form-control" type="tel" name="phone" id="phone" placeholder="Ej.: +5491156542861">
                    </div>

                    <div class="mb-3">
                        <label clsss="form-label" for="asunto">ASUNTO</label>
                        <select class="form-control" name="asunto" id="asunto">
                            <option name="productos">Productos</option>
                            <option name="envios">Envíos</option>
                            <option name="medio_pago">Medios de pago</option>
                            <option name="otro">Otro</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <textarea class="form-control" name="consulta" id="" cols="30" rows="10" placeholder="Consulta"></textarea>
                    </div>

                    <div class="mb-3 contacto__form--news form-check">
                        <input class="form-check-input" type="checkbox" name="newsletter" id="newsletter">
                        <label class="form-check-label" for="newsletter">Recibir información sobre promociones y nuevos
                            lanzamientos.</label>
                    </div>

                    <div class="contacto__form--botones">
                        <input type="submit" value="ENVIAR">
                        <input type="reset" value="VACIAR FORMULARIO">
                    </div>

                </form>
            </div>

        </section>

        <section class="redes">

            <div class="redes__div">
                <h2>SEGUINOS EN INSTAGRAM</h2>
                <h2 class="redes__div--dots">. . . . . </h2>
                <div class="redes__div--instagram">
                    <a href="https://www.instagram.com/sunwater.ar/" target="_blanck"><i
                            class="fab fa-instagram-square fa-5x"></i></a>
                    <a href="https://www.instagram.com/sunwater.ar/" target="_blanck"
                        class="redes__div--instagram--link">sunwater.ar</a>
                </div>
            </div>

        </section>
        `
    }
}
const ErrorComponent = {
    render: () => {
        return `
        <h1>Página no econtrada</h1>
        `
    }
};

const routes = [
    {path: '/', component: HomeComponent },
    {path: '/nosotros', component: NosotrosComponent },
    {path: '/galeria', component: GaleriaComponent},
    {path: '/faq', component: FaqComponent },
    {path: '/contacto', component: ContactoComponent},
];

/* Leemos la 'url' */
const parseLocation = () => location.hash.slice(1) || '/';

/* Busca el componenete asociado al path */
const findComponent = (userPath) => routes.find(route => route.path === userPath);

const router = () => {
    //leer url que accedió el usuario
    const userPath = parseLocation();

    //buscamos el componente correspondiente
    const { component = ErrorComponent} = findComponent(userPath) || {};
    
    const main = document.querySelector('#main');

    main.innerHTML = component.render();
}

document.addEventListener("DOMContentLoaded", router);
window.addEventListener('hashchange', router);
