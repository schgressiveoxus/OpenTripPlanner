/* This program is free software: you can redistribute it and/or
   modify it under the terms of the GNU Lesser General Public License
   as published by the Free Software Foundation, either version 3 of
   the License, or (at your option) any later version.
   
   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.
   
   You should have received a copy of the GNU General Public License
   along with this program.  If not, see <http://www.gnu.org/licenses/>. 
*/

otp.namespace("otp.locale");

/**
  * @class
  */
otp.locale.Spanish = {

    config :
    {
        metricsSystem : "international",
        rightClickMsg : "Click Derecho en el mapa para marcar el inicio y el fin de tu viaje.",
        attribution   : {
            title   : "License Attribution",
            content : "Disclaimer goes here"
        }
    },

    contextMenu : 
    {
        fromHere         : "Comenzar un viaje desde aqui",
        toHere           : "Terminar el viaje aqui",
        intermediateHere : "Add intermediate point",

        centerHere       : "Centrar el mapa aqui",
        zoomInHere       : "M\xE1s Zoom",
        zoomOutHere      : "Menos Zoom",
        previous         : "Ultima posicion en el mapa",
        next             : "Siguiente posicion en el mapa"
    },

    bikeTriangle : 
    {
        safeName : "Bike friendly",
        safeSym  : "B",

        hillName : "Flat",
        hillSym  : "F",

        timeName : "Quick",
        timeSym  : "Q"
    },

    service : 
    {
        weekdays:  "D\xEDas de Semana",
        saturday:  "S\xE1bado",
        sunday:    "Domingo",
        schedule:  "Programado"
    },

    indicators : 
    {
        ok         : "OK",
        date       : "Fecha",
        loading    : "Cargando",
        searching  : "Buscando...",
        qEmptyText : "Direccion, interseccion, o nro de parada..."
    },

    buttons: 
    {
        reverse       : "Invertir",
        reverseTip    : "<b>Invertir direcciones</b><br/>Planifica un viaje de retorno inviertiendo los puntos de comienzo y final, y ajustando el tiempo.",
        reverseMiniTip: "Invertir direcciones",

        edit          : "Edit",
        editTip       : "<b>Edit trip</b><br/>Return to the main trip planner input form with the details of this trip.",

        clear         : "Clear",
        clearTip      : "<b>Clear</b><br/>Clear the map and all active tools.",

        fullScreen    : "Full Screen",
        fullScreenTip : "<b>Full Screen</b><br/>Show -or- hide tool panels",

        print         : "Print",
        printTip      : "<b>Print</b><br/>Print friendly version of the trip plan (without map).",

        link          : "Link",
        linkTip      : "<b>Link</b><br/>Mostrar la URL del viaje.",

        feedback      : "Feedback",
        feedbackTip   : "<b>Feedback</b><br/>Send your thoughts or experiences with the map",

        submit       : "Enviar",
        clearButton  : "Limpiar",
        ok           : "OK",
        cancel       : "Cancelar",
        yes          : "Si",
        no           : "No",
        showDetails  : "&darr; Mostrar detalles &darr;",
        hideDetails  : "&uarr; Ocultar detalles &uarr;"
    },

    // note: keep these lower case (and uppercase via template / code if needed)
    directions : 
    {
        southeast:      "sureste",
        southwest:      "suroeste",
        northeast:      "noreste",
        northwest:      "noroeste",
        north:          "norte",
        west:           "oeste",
        south:          "sur",
        east:           "este",
        bound:          "l\xEDmite",
        left:           "a la izquierda",
        right:          "a la derecha",
        slightly_left:  "dobla lentamente hacia la izquierda",
        slightly_right: "dobla lentamente hacia la derecha",
        hard_left:      "dobla hacia la izquierda",
        hard_right:     "dobla hacia la derecha",
        'continue':     "continua en",
        to_continue:    "para continuar en",
        becomes:        "pasa a ser",
        at:             "a",
        on:             "en",
        to:             "hacia",
        via:            "via",
        circle_counterclockwise: "take roundabout counterclockwise",
        circle_clockwise:        "take roundabout clockwise",
        // rather than just being a direction, this should be
        // full-fledged to take just the exit name at the end
        elevator: "take elevator to"
    },

    // see otp.planner.Templates for use
    instructions :
    {
        walk         : "Caminar",
        walk_toward  : "Camina hacia el",
        walk_verb    : "Caminando",
        bike         : "Bicicleta",
        bike_toward  : "Pedalea hacia el",
        bike_verb    : "En bicicleta",
        drive        : "Auto",
        drive_toward : "Avanza hacia el",
        drive_verb   : "Auto",
        move         : "Avanza",
        move_toward  : "Avanza hacia el",

        transfer     : "transbordo",
        transfers    : "transbordos",

        continue_as  : "Continua como",
        stay_aboard  : "Mantente abordo",

        depart       : "Salida desde",
        arrive       : "Llegada a",

        start_at     : "Origen:",
        end_at       : "Destino:"
    },

    // see otp.planner.Templates for use
    labels : 
    {
        agency_msg   : "Servicio proporcionado por",
        agency_msg_tt: "Abrir en otra ventana la pagina de la agencia...",
        about        : "Alrededor de",
        stop_id      : "Codigo de parada",
        trip_details : "Detalles del viaje",
        travel       : "Viaje",
        valid        : "Valido el",
        trip_length  : "Tiempo",
        with_a_walk  : "Con una caminata de",
        alert_for_rt : "Alerta para ruta",
        fare         : "Tarifa",
        regular_fare : "Regular",
        student_fare : "Estudiante",
        senior_fare  : "Adulto Mayor",
        fare_symbol  : "$"
    },

    // see otp.planner.Templates for use -- one output are the itinerary leg headers
    modes :
    {
        WALK:           "Walk",
        BICYCLE:        "Bicycle",
        CAR:            "Car",
        TRAM:           "Tram",
        SUBWAY:         "Metro",
        RAIL:           "Rail",
        BUS:            "Bus",
        FERRY:          "Ferry",
        CABLE_CAR:      "Cable Car",
        GONDOLA:        "Gondola",
        FUNICULAR:      "Funicular"
    },

    ordinal_exit:
    {
        1:  "to first exit",
        2:  "to second exit",
        3:  "to third exit",
        4:  "to fourth exit",
        5:  "to fifth exit",
        6:  "to sixth exit",
        7:  "to seventh exit",
        8:  "to eighth exit",
        9:  "to ninth exit",
        10: "to tenth exit"
    },

    time:
    {
        hour_abbrev    : "h",
        hours_abbrev   : "hs",
        hour           : "hora",
        hours          : "horas",

        minute         : "minuto",
        minutes        : "minutos",
        minute_abbrev  : "min",
        minutes_abbrev : "mins",
        second_abbrev  : "seg",
        seconds_abbrev : "segs",
        format         : "D, j M H:i",
        date_format    : "d-m-Y",
        time_format    : "H:i",
        months         : ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    },

    systemmap :
    {
        labels :
        {
            panelTitle : "System Map"
        }
    },

    tripPlanner :
    {
        // see otp/planner/*.js for where these values are used
        labels : 
        {
            panelTitle    : "OTP Demo",
            tabTitle      : "Planifica tu viaje",
            inputTitle    : "Detalles del viaje",
            optTitle      : "Preferencias del viaje (opcional)",
            submitMsg     : "Planificando tu viaje...",
            optionalTitle : "",
            date          : "Fecha",
            time          : "Hora",
            when          : "Cuando",
            from          : "Desde",
            fromHere      : "Desde aca",
            to            : "Hacia",
            toHere        : "Hacia alli",
            intermediate  : "Puntos intermedios",
            minimize      : "Mostrar el viaje",
            maxWalkDistance: "Caminar Maximo",
            walkSpeed     : "Velocidad al Caminar",
            maxBikeDistance: "Maximum bike",
            bikeSpeed     : "Bike speed",
            arriveDepart  : "Subir en/Bajar en",
            mode          : "Viajar en",
            wheelchair    : "Wheelchair accessible trip", 
            go            : "Ir",
            planTrip      : "Planificar el viaje",
            newTrip       : "Nuevo viaje"
        },

        // see otp/config.js for where these values are used
        link : 
        {
            text           : "URL de este viaje OTP)",
            trip_separator : "Este viaje en otro buscador",
            bike_separator : "On other bike trip planners",
            walk_separator : "On other walking direction planners",
            google_transit : "Google Maps",
            google_bikes   : "Google Bike Directions",
            google_walk    : "Google Walking Directions",
            google_domain  : "http://www.google.com"
        },

        // see otp.planner.Forms for use
        geocoder:
        {
            working      : "Buscando direcciones ....",
            error        : "No se encontro ningun resultado",
            msg_title    : "Revisar el plan de viaje",
            msg_content  : "Por favor corrija los errores antes de planificar su viaje",
            select_result_title : "Por favor seleccione un resultado",
            address_header : "Direcciones"
        },

        error:
        {
            title        : 'Error del planificador de viajes',
            deadMsg      : "Map Trip Planner is currently not responding. Please wait a few minutes to try again, or try the text trip planner (see link below).",
            geoFromMsg   : "Por favor seleccione la ubicacion de partida para el viaje: ",
            geoToMsg     : "Por favor seleccione la ubicacion de llegada para el viaje: "
        },
        
        // default messages from server if a message was not returned ... 'Place' error messages also used when trying to submit without From & To coords.
        msgcodes:
        {
            200: "Plan OK",
            500: "Server error",
            400: "Trip out of bounds",
            404: "Path not found",
            406: "No transit times",
            408: "Request timed out",
            413: "Invalid parameter",
            440: "The 'From' place is not found ... please re-enter it.",
            450: "The 'To' place is not found ... please re-enter it.",
            460: "Places 'From' and 'To' are not found ... please re-enter them.",
            470: "Places 'From' or 'To' are not wheelchair accessible",
            409: "Too close",
            340: "Geocode 'From' ambiguous",
            350: "Geocode 'To' ambiguous",
            360: "Geocodes 'From' and 'To' are ambiguous"
        },

        options: 
        [
          ['TRANSFERS', 'Con menos combinaciones'],
          ['QUICK',     'M\xE1s rapido'],
          ['SAFE',      'Viaje seguro para ciclistas'],
          ['TRIANGLE',  'Viaje a medida ...']
        ],
    
        arriveDepart: 
        [
          ['false', 'Ahora'], 
          ['true',  'A las']
        ],
    
        maxWalkDistance : 
        [
		['300',   '300 metros'],
			['500',   '500 metros'],
            ['1500',   '1,5 km'],
            ['2000',   '2 km'],
            ['2500',  '2,5 km'],
        
        ],

	walkSpeed :
	[	//velocidad en metros /s
		['0.277778',  '1 km/h'],
		['0.694445',  '2,5 km/h'],
		['1.28',  '4,6 km/h'],
		['1.38889',  '5 km/h'], 	
		['1.666668',  '6 km/h']
	],

        mode : 
        [
            ['TRANSIT,WALK', 'Cualquier transporte publico'],
            ['BUSISH,WALK', 'Solo bus'],
            ['TRAINISH,WALK', 'Solo metro'],
            ['WALK', 'Solo caminar'],
            ['BICYCLE', 'Solo bicicleta'],
           ['TRANSIT,BICYCLE', 'Transporte & Bicicleta']
        ],

        // TODO: remove this hack, and provide code that allows the mode array to be configured with different transit modes.
        //       (note that we've been broken for awhile here, since many agencies don't have a 'Train' mode either...this needs attention)
        // IDEA: maybe we start with a big array (like below), and the pull out modes from this array when turning off various modes...
        with_bikeshare_mode : 
        [
            ['TRANSIT,WALK', 'Transit'],
            ['BUSISH,WALK', 'Bus only'],
            ['TRAINISH,WALK', 'Train only'],
            ['WALK', 'Walk only'],
            ['BICYCLE', 'Bicycle only'],
            ['WALK,BICYCLE', 'Rented Bicycle'],
            ['TRANSIT,BICYCLE', 'Transit & Bicycle'],
            ['TRANSIT,WALK,BICYCLE', 'Transit & Rented Bicycle']
        ],

        wheelchair :
        [
            ['false', 'Not required'],
            ['true', 'Required']
        ]
    },

    CLASS_NAME : "otp.locale.Spanish"
};

