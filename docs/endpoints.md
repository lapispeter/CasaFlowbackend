# Végpontok

## bills

|végpont|metódus|Auth|CRUD|Leirás|
|-|-|-|-|-|
|/bills|GET|igen|read|Számlák olvasása|
|/bills|POST|igen|create|Új számla létrehozása|
|/bills/:id|PUT|igen|update|Számlák frissitése|
|/bills/:id|DELETE|igen|delete|Számla törlése|

### Számlák olvasása

*/api/bills GET

### Új számla létrehozása

*/api/bills POST

```json

    {
        "billType": "Gáz",
        "amount": "32400",
        "date": "2026-07-23",
        "paymentStatus": "fizetve"
    }

```

### Számlák frissitése

*/api/bills/2 PUT

```json
    {
        "id": 2,
        "billType": "Gáz",
        "amount": "32400",
        "date": "2026-07-23",
        "paymentStatus": "fizetve"
            
    }
```

### Számla törlése

*/api/bills/2 DELETE

```json
    {
        "id": 2,
        "billType": "Gáz",
        "amount": "32400",
        "date": "2026-07-23",
        "paymentStatus": "fizetve"
    }
```

## meterReadings

|végpont|metódus|Auth|CRUD|Leirás|
|-|-|-|-|-|
|/meter-readings|GET|igen|read|Mérőóra leolvasások olvasása|
|/meter-readings|POST|igen|create|Új mérőóra leolvasás létrehozása|
|/meter-readings/:id|PUT|igen|update|Mérőóra leolvasások frissitése|
|/meter-readings/:id|DELETE|igen|delete|Mérőóra leolvasás törlése|

### Mérőóra leolvasások olvasása

*/api/meter-readings GET

### Új mérőóra leolvasás létrehozása

*/api/meter-readings POST

```json

    {
        "meterType": "Gáz",
        "reading": "32400",
        "date": "2026-07-23"
    }

```

### Mérőóra leolvasások frissitése

*/api/meter-readings/2 PUT

```json
    {
        "id": 2,
        "meterType": "Gáz",
        "reading": "32400",
        "date": "2026-07-23"  
    }
```

### Mérőóra leolvasás törlése

*/api/meter-readings/2 DELETE

```json
    {
        "id": 2,
        "meterType": "Gáz",
        "reading": "32400",
        "date": "2026-07-23"
    }
```

## reminders

|végpont|metódus|Auth|CRUD|Leirás|
|-|-|-|-|-|
|/reminders|GET|igen|read|Emlékeztetők olvasása|
|/reminders|POST|igen|create|Új emlékeztető létrehozása|
|/reminderss/:id|PUT|igen|update|Emlékeztetők frissitése|
|/reminders/:id|DELETE|igen|delete|Emlékeztető törlése|

### Emlékeztetők olvasása

*/api/reminders GET

### Új emlékeztető létrehozása

*/api/reminders POST

```json

    {
        "title": "születésnap",
        "description": "édesapa",
        "date": "2026-07-23"
    }

```

### Emlékeztetők frissitése

*/api/reminders/2 PUT

```json
    {
        "id": 2,
        "title": "születésnap",
        "description": "édesapa",
        "date": "2026-07-23"  
    }
```

### Emlékeztető törlése

*/api/reminders/2 DELETE

```json
    {
        "id": 2,
        "title": "születésnap",
        "description": "édesapa",
        "date": "2026-07-23"
    }
```

## shoppinglists

|végpont|metódus|Auth|CRUD|Leirás|
|-|-|-|-|-|
|/shopping-lists|GET|igen|read|Bevásárlólisták olvasása|
|/shopping-lists|POST|igen|create|Új bevásárlólista létrehozása|
|/shopping-lists/:id|PUT|igen|update|Bevásárlólisták frissitése|
|/shopping-lists/:id|DELETE|igen|delete|Bevásárlólista törlése|

### Bevásárlólisták olvasása

*/api/shopping-lists GET

### Új bevásrlólista létrehozása

*/api/shopping-lists POST

```json

    {
        "title": "sajt",
        "note": "trapista",
        "quantiti": "1",
        "unit": "kg",
        "purchaseDate": "2026-03-5",
        "expiryDate": "2026-07-23",
        "isBought": "igen"
    }

```

### Bevásárlólisták frissitése

*/api/shopping-lists/2 PUT

```json
    {
        "id": 2,
        "title": "sajt",
        "note": "trapista",
        "quantiti": "1",
        "unit": "kg",
        "purchaseDate": "2026-03-5",
        "expiryDate": "2026-07-23",
        "isBought": "igen"
    }
```

### Bevásárlólista törlése

*/api/shopping-lists/2 DELETE

```json
    {
        "id": 2,
        "title": "sajt",
        "note": "trapista",
        "quantiti": "1",
        "unit": "kg",
        "purchaseDate": "2026-03-5",
        "expiryDate": "2026-07-23",
        "isBought": "igen"
    }
```