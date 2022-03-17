const config = {
    PORT: process.env.PORT || 8080,
    mongoRemote: {
    client: 'mongodb',
    path: 'mongodb+srv://admin:admin@cluster0.izzih.mongodb.net/ecommerce',
    },
    firebase: {
        "type": "service_account",
        "project_id": "proyectobackend-5ab06",
        "private_key_id": "86dadb8314494ff39b27ccd54598e7ca32ee27b7",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC0Da8YHCtsKg9G\nXKARd5sefONXVo0/ceSq2MuroI2JBrYPklpMKpYwQcEHNLeBnGarp1WNW/PqPUGn\nAZ3vqIGKURi9vqVdMLCYJAseK0BvtTC6ML6+JkgCQouiiTHjJwMAbxNdS289KZEQ\nuk9vDRlKnjFaM+t41Envkh6N/LGIzOB6Mq71Id0CBtkqK/3+6/Z8P3xpnD8d50AM\njix/uGfc/SH7QrIXEKZMO4T/H1Pa8mqsl/9WIJ5vVx7aA612wrWs4ev2laYzOFFA\nHgMTo7JWEGySRgp4WivMCd9ScLmqRIl/3BAB8VIkMK4FgBOVAcwSJtvTDxTNGrd/\nvkD5FHyVAgMBAAECggEAKB04Wk3EWtfQCWQPgXS9SYCXgdjVpUHxqSKd1cHyZonp\nO/TmSzvdtCiiIcHb9HNs6GdihxjqcdBt9RBGKKPJIJDKy1NTMjzryymUlIccVwbu\nMT008dZDisVaqL6aL7p8T7dvgASTZvQAztJDakFn1hkCc89HcecSBd7vEcEvqINj\n6nhdtP5tKcMeQBkKckA3ly9woi7vz/YhEgEu98IGr96s8bX/hvF/hOFSjLnkRAmu\n0HoduyupmpG+Cg9bkZRaSLmNr0nONEoVOE2rpR6fb6y7U7b15+0gkY3+/dByJmmr\niHbfXJY6CZ3u8Z80zkWsN8PGE+57ohUIHVH2Aed3rQKBgQD5o29yUrHCnrTTtd0y\n2/GNVirbnbhNq6P4RsjVT5nCnT/ba1qJiUoRciHow3dxkheE9Cmgqeh6k1Fg252T\n6dSt3JdG+w4bUt0YW2rfdrW4u7bxQcTWEoMsT6zz8jJb6V0XKsybIp+ImiwsF3a/\nRWgKxXm3Sp7C6RvpvfPebMTrVwKBgQC4pEwvMqmS2q4xOwWwTlNkyyLZwBkjc86G\n+hFG1KZg6DDE4YYydgSa8mLWmYUdtI+8W2/kPAS4OFPtytPCC08zeDVaJ35mLZWZ\nLZYoa7WqqffyAV9+yuHXnwiO8e+A0nUzxaIJLSNrP8h/518KeIymOIfwulzvm6Rv\nWlgiRjkP8wKBgQDBpPKtVtJHKr8QPtGwQwaT4VRreWPe9BbEX3woY4/ddAd12Eep\nypJnCAafvQhpU67k1lV4KHSKqL4GiTUp6Meueh/q0pI1xch1vWwgncAG5a3aZW8f\ns8qG0+NQc/52Z4ZrkyqV6HyiBR3gse7OHjO/r0FkWgDfJt4dKdkDH5J9DwKBgQCH\n/0O589fgub9ZtX5wKJDWCaUGu64IZdD1rBSzlgdiE0NwkCf23ORxeByCshrREWBZ\nPQQCGI7lXV+8Iwurvga9A0pQuAwqmGK6q1ARP5xUMtLUZlx/GFIWLiXwm5RrzxfS\nZTv/BEc1RIqaYsGnBbma6MJ/9dRkC8Cm3+VQgWagLwKBgQDxMGnEq0Np65C0ug2x\n2OmkSlJIkOTA9TzK1E2o5o8KBK8s+pE+psqlQt8rSXYnHT5VIy0LBVNI/yW90zN8\n7j8k1YBbqyFQgT/TGL5MCJZWeg4/ePFRB4EB4yj9urgqldzaXdueAIUF42dAjD0o\ndeD6bnETXBNBTKksnXh4E5KBwg==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-ppbnz@proyectobackend-5ab06.iam.gserviceaccount.com",
        "client_id": "106760482171883462560",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ppbnz%40proyectobackend-5ab06.iam.gserviceaccount.com"
      }
}

module.exports = config;