document.addEventListener('DOMContentLoaded', () => {
    // --- CONFIGURACIÓN Y DATOS INICIALES ---

    // Configuración de Mermaid para los diagramas de flujo
    mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        themeVariables: {
            primaryColor: '#ffffff',
            primaryTextColor: '#333',
            lineColor: '#555',
            nodeBorder: '#7BB53D',
            mainBkg: '#ffffff',
            primaryBorderColor: '#7BB53D',
            secondaryColor: '#f9f9f9',
        },
        flowchart: {
            curve: 'basis'
        }
    });

    // Contenido de todas las diapositivas de la presentación
    const slidesContent = [
        {
            content: `<div class="text-center w-full"><h1 class="text-4xl font-bold mt-4 md:mt-8">Modelos de Envío de Mensajes a Clientes de Antina TV</h1><h2 class="text-2xl font-semibold mt-4 text-gray-700">Recolección de Información Clave</h2></div>`
        },
        {
            content: `<h2>Contexto y Objetivo:</h2><p><strong>¿Por qué estamos aquí?</strong></p><ul><li><strong>Situación:</strong> necesitamos saber cuántos clientes de una base particular tienen internet.</li><li><strong>Nuestro desafío:</strong> obtener detalles (específicamente la velocidad y si tienen Android TV).</li></ul><p><strong>Objetivo de la presentación:</strong></p><ul><li>Comparar dos modelos de envío de mensajes para recolectar esta información de manera eficiente.</li></ul>`
        },
        {
            content: `<h2>Modelo 1 - Envío Único:</h2><h3>La Propuesta:</h3><ul><li><strong>Todo en uno:</strong> Buscamos obtener la mayor cantidad de información posible en una sola interacción con el cliente.</li><li><strong>Ventaja principal:</strong> Un solo envío masivo a toda la base de clientes.</li><li><strong>Desafío:</strong> Mayor probabilidad de respuestas ambiguas o fuera de las opciones predefinidas.</li></ul>`
        },
        {
            content: `
                <h2>Modelo 1 - Envío Único: El Flujo</h2>
                <div class="flex flex-col md:flex-row items-center gap-8 mt-8 w-full">
                    <div class="diagram-wrapper flex-1 min-w-0">
                        <div class="diagram-container">
                            <pre class="mermaid">
graph TD
A[Inicio] --> B(Envío Único a TODOS los clientes)
B -- "¿Tenés internet en el domicilio?" --> C{Cliente Responde}
C -- "1-SI" --> D1(Etiquetar: Tiene internet)
D1 -- "Mensaje: ¡Genial! Contanos velocidad y si tenés AndroidTV." --> E[ANÁLISIS MANUAL]
C -- "2-NO" --> F1(Etiquetar: No tiene internet)
F1 -- "Mensaje: ¡Entendido! Lo pasamos a nuestros asesores. Gracias." --> G[Interacción Finalizada]
C -- "Otra cosa" --> H(Mensaje: Por favor, respondé con '1-SI' o '2-NO'.)
H --> C
                            </pre>
                        </div>
                        <div class="zoom-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" /></svg>
                        </div>
                    </div>
                    <p class="flex-1 text-base text-gray-700"><strong>Explicación:</strong> Si responden <strong>"SI"</strong>, se les pide más detalles en un mensaje de texto libre que tendremos que revisar manualmente.</p>
                </div>`
        },
        {
            content: `<h2>Modelo 1 - Envío Único: Pros y Contras</h2><h3 class="text-xl font-medium mb-2 text-green-600">✅ Ventaja:</h3><ul><li><strong>Costo:</strong> Solo un envío masivo, lo que reduce el gasto en mensajes.</li></ul><h3 class="text-xl font-medium mb-2 mt-4 text-red-600">❌ Desventaja:</h3><ul><li><strong>Gestión de respuestas:</strong> Si el cliente no usa los botones, tendremos que <strong>analizar caso por caso</strong> sus respuestas de texto libre. Esto puede ser lento y propenso a errores.</li></ul>`
        },
        {
            content: `<h2>Modelo 2 - Dos Envíos Secuenciales:</h2><h3>La Propuesta:</h3><ul><li><strong>Paso a paso:</strong> Dividimos la conversación en dos partes claras para simplificar la recopilación de datos.</li><li><strong>Prioridad:</strong> Forzar una respuesta "SI" o "NO" en el primer contacto.</li><li><strong>Ventaja principal:</strong> Automatización en la primera etapa y revisión manual más focalizada en la segunda.</li></ul>`
        },
        {
            content: `
                <h2>Modelo 2 - Envío 1</h2>
                 <div class="flex flex-col md:flex-row items-center gap-8 mt-8 w-full">
                    <div class="diagram-wrapper flex-1 min-w-0">
                        <div class="diagram-container">
                            <pre class="mermaid">
graph TD
A[Inicio] --> B(Envío 1 a TODOS los clientes)
B -- "¿Tenés internet?" --> C{Cliente Responde SI/NO}
C -- "1-SI" --> D1(Etiquetar: Tiene internet)
D1 -- "Mensaje: ¡Entendido! Gracias." --> E[Marcar para ENVÍO 2]
C -- "2-NO" --> F1(Etiquetar: No tiene internet)
F1 -- "Mensaje: ¡Entendido! Gracias." --> G[Interacción Finalizada]
C -- "Otra cosa" --> H(Mensaje: Por favor, respondé con '1-SI' o '2-NO'.)
H --> C
                            </pre>
                        </div>
                        <div class="zoom-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" /></svg>
                        </div>
                    </div>
                    <p class="flex-1 text-base text-gray-700"><strong>Explicación:</strong> Clasificamos a los clientes en dos grupos claros ("tienen internet" y "no tienen") de forma automatizada.</p>
                </div>`
        },
        {
            content: `
                <h2>Modelo 2 - Envío 2</h2>
                <div class="flex flex-col md:flex-row items-center gap-8 mt-8 w-full">
                    <div class="diagram-wrapper flex-1 min-w-0">
                        <div class="diagram-container">
                            <pre class="mermaid">
graph TD
A[Clientes marcados del Envío 1] --> B(Envío 2: SOLO a estos clientes)
B -- "Consultar velocidad y dispositivo" --> C{Respuesta del cliente}
C --> D[ANÁLISIS MANUAL]
D --> E[Interacción Finalizada / Datos Consolidados]
                            </pre>
                        </div>
                        <div class="zoom-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" /></svg>
                        </div>
                    </div>
                    <p class="flex-1 text-base text-gray-700"><strong>Explicación:</strong> Enviamos una segunda consulta solo al grupo relevante, enfocando el análisis manual donde más importa.</p>
                </div>`
        },
        {
            content: `<h2>Modelo 2 - Dos Envíos: Pros y Contras</h2><h3 class="text-xl font-medium mb-2 text-green-600">✅ Ventajas:</h3><ul><li><strong>Claridad de datos:</strong> Aseguramos un "SI" o "NO" preciso, eliminando ambigüedades.</li><li><strong>Revisión focalizada:</strong> Solo analizamos manualmente las respuestas del grupo más pequeño y relevante.</li></ul><h3 class="text-xl font-medium mb-2 mt-4 text-red-600">❌ Desventajas:</h3><ul><li><strong>Doble costo:</strong> Implica pagar dos campañas de mensajes.</li><li><strong>Mayor tiempo:</strong> La información completa tardará al menos 48 horas.</li></ul>`
        },
        {
            content: `<h2>Conclusión y Próximos Pasos</h2><ul><li><strong>Presupuesto vs. Precisión:</strong> ¿Invertimos más en envíos para obtener datos limpios o gestionamos más complejidad manual?</li><li><strong>Tiempos de Implementación:</strong><ul class="list-none ml-4 mt-2"><li class="relative pl-6 mb-1 before:content-['–'] before:absolute before:left-0 before:text-gray-500 before:font-bold"><strong>Modelo 1:</strong> Envío miércoles, datos el jueves.</li><li class="relative pl-6 before:content-['–'] before:absolute before:left-0 before:text-gray-500 before:font-bold"><strong>Modelo 2:</strong> Envío miércoles y jueves, resultados el lunes 23/6.</li></ul></li></ul>`
        }
    ];

    // --- ELEMENTOS DEL DOM ---
    let currentSlide = 0;
    const slideViewport = document.querySelector('.slide-viewport');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const diagramModal = document.getElementById('diagramModal');
    const modalContent = document.getElementById('modalContent');
    const closeModalBtn = document.getElementById('closeModal');

    // --- FUNCIONES ---

    /**
     * Renderiza todas las diapositivas en el DOM a partir del array slidesContent.
     */
    function renderSlides() {
        slideViewport.innerHTML = ''; // Limpia el contenedor
        slidesContent.forEach((slideData, index) => {
            const slideDiv = document.createElement('div');
            slideDiv.classList.add('slide');
            if (index === currentSlide) {
                slideDiv.classList.add('active');
            }
            slideDiv.innerHTML = slideData.content;
            slideViewport.appendChild(slideDiv);
        });
        renderActiveDiagram();
        updateNavigationButtons();
    }

    /**
     * Muestra una diapositiva específica por su índice.
     * @param {number} index - El índice de la diapositiva a mostrar.
     */
    function showSlide(index) {
        currentSlide = index;
        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        renderActiveDiagram();
        updateNavigationButtons();
    }
    
    /**
     * Renderiza el diagrama de Mermaid si existe en la diapositiva activa.
     */
    function renderActiveDiagram() {
        const activeSlide = slideViewport.querySelector('.slide.active');
        if (activeSlide && activeSlide.querySelector('.mermaid')) {
             try {
                mermaid.run({
                    nodes: activeSlide.querySelectorAll('.mermaid')
                });
            } catch (error) {
                console.error("Error rendering Mermaid diagram:", error);
            }
        }
    }

    /**
     * Actualiza el estado (activado/desactivado) de los botones de navegación.
     */
    function updateNavigationButtons() {
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === slidesContent.length - 1;
    }
    
    /**
     * Abre la ventana emergente (modal) con el diagrama SVG clonado.
     * @param {HTMLElement} container - El elemento .diagram-container que fue clickeado.
     */
    function openDiagramModal(container) {
        const svgElement = container.querySelector('svg');
        if (svgElement) {
            const clonedSvg = svgElement.cloneNode(true);
            clonedSvg.style.maxWidth = '100%';
            clonedSvg.style.height = 'auto';
            modalContent.innerHTML = '';
            modalContent.appendChild(clonedSvg);
            diagramModal.classList.remove('hidden');
            diagramModal.classList.add('flex');
        }
    }

    /**
     * Cierra la ventana emergente (modal).
     */
    function closeDiagramModal() {
        diagramModal.classList.add('hidden');
        diagramModal.classList.remove('flex');
        modalContent.innerHTML = ''; // Limpia el contenido para liberar memoria
    }

    // --- EVENT LISTENERS ---

    // Navegación con botones
    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < slidesContent.length - 1) {
            showSlide(currentSlide + 1);
        }
    });
    
    // **FIXED**: Abrir modal al hacer clic en un diagrama, manejando la carga asíncrona.
    slideViewport.addEventListener('click', (e) => {
        const diagramContainer = e.target.closest('.diagram-container');
        if (!diagramContainer) return; // Salir si el clic no fue en un diagrama

        const svgElement = diagramContainer.querySelector('svg');

        if (svgElement) {
            // Si el SVG ya existe, abrir el modal inmediatamente.
            openDiagramModal(diagramContainer);
        } else {
            // Si el SVG no existe, es probable que Mermaid no haya terminado de renderizar.
            // Buscamos el código Mermaid original.
            const mermaidNode = diagramContainer.querySelector('.mermaid');
            if (mermaidNode) {
                // Cambiar cursor para indicar carga
                diagramContainer.style.cursor = 'wait';
                // Forzamos el renderizado de este nodo y esperamos la promesa.
                mermaid.run({ nodes: [mermaidNode] }).then(() => {
                    // Una vez renderizado, intentamos abrir el modal.
                    openDiagramModal(diagramContainer);
                    diagramContainer.style.cursor = 'zoom-in'; // Restaurar cursor
                }).catch(err => {
                    console.error("Error re-rendering mermaid on click:", err);
                    diagramContainer.style.cursor = 'zoom-in'; // Restaurar cursor en caso de error
                });
            }
        }
    });
    
    // Cerrar modal
    closeModalBtn.addEventListener('click', closeDiagramModal);
    diagramModal.addEventListener('click', (e) => {
        // Cierra si se hace clic en el fondo oscuro
        if (e.target === diagramModal) {
            closeDiagramModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        // Cierra si se presiona la tecla Escape
        if (e.key === "Escape" && !diagramModal.classList.contains('hidden')) {
            closeDiagramModal();
        }
    });

    // --- INICIALIZACIÓN ---
    renderSlides();
});
