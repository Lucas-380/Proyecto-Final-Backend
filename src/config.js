const config = {
    PORT: process.env.PORT || 8080,
    mongoRemote: {
    client: 'mongodb',
    cnxStr: 'mongodb+srv://admin:admin@cluster0.izzih.mongodb.net/ecommerce'
    },
    firebase: {
        "type": "service_account",
        "project_id": "basefirebase-a565e",
        "private_key_id": "cc81ce57522a498f6003d99ccafde7f078172ad6",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCvxncQR6RcDGiv\nW1E8+Yt5Q6L5jNALO1JjBMAXiHKV4NdyqtFDBzOZ2rjfDyJ2QSOGM9pTI5R4mTOm\n0mjObiJprAXL8pShBZQhY+0vyW8VZChFXF6PSQEPCClvbVzsVOeCWgrj4jRPxGcv\nb+/6ulGvNCQbhxo1vx4O380j9nmj6UWu8stxOdhg6C3f0ihUjUT93R6ssQBBJpRy\nhHqFhlGxKFYPMF2Xm5NspYnUVTvyOR1k4z0JkUSefphdnWXDlQnIC7QtGXsnH6s7\nxcoFKKtDPE6QnZ6haZUmMRoQKQzoTDI2aZ09GDbVQqBNUTxYUykuLRdlKVAO+Chs\nT3jmibLRAgMBAAECgf9hXr919TnHA9i5ywwlitcIRb9yHd7hWes5jtgaMSvIetTe\nYGGrj8G16MOgTPH6L/tNzEuU4pDMfZFvR/9m2vuVLgXIBIjw6fY0yPYLErrGTsVA\nJvr6xKYhfZP2dc6T3DSisN53fkccKOBAFvIJIk09kNSvqxeJzmUIOFGbKl4XvaYi\n8sXEC9nL4lM05UWYIILxt/T8DD8jj0KUg+Pbsokp7W9xXOd8Toc/RXRfv4z+Ry1E\nSMlk6gmHrPt/a098e+MXQaOBLAJqjKivEPFXVsv3R+uCF/AWKpyC0U6XVaXubv7d\nJxTbShqgyhnPhib4whoyssIPu8FOwsKv3uUeKcECgYEA1rnijjjxEoZXtzi/CdtR\nh207t2s3fudLf9htoiNi8LjWHMLSVAcEF9FeZUYNPwQXNgBadDZ8A1eAcMyOvfoX\noMV7yICSoz/iWTwVq+omxDSlrXJDM/9MzL/ZjSvs66f1koWBMCFSZ8QlvICrsY+L\nV4f3S37HQicuTFSxIy5WChECgYEA0Y/ozT/VB5ODCzE5vnpRjOvxH5VoY8rOD/MQ\nBEZzc0XJE0jlQI74QvvhH44HIvexcuBfnqTp1Az0beHKvhJLboQqMHo1z0hGjJXK\nSkZGXTLHH90A0W4jMejIenCsElRi8NbjVbyrI/KBAPQF2VF14xpw/v36lh+4llkL\nvW0uXMECgYBqDC4PDaJKAt1pWPZIuO+AEfuvL52d6D+KaWpj7FQeDTt5wuI7q6di\n1/1lyP4bxDpuaihCQvJmeB2wF+bbfpuSxFXJBW7mf1ObvKf7Ws5AkrvMeKUmFg1p\nBcs9BJejHzWSYqsWCS74npAAlA+3xuwLk9QXjgp86nrcKeu+M1E88QKBgDDmsP98\nPrzG2lR5Ry1Ao9kLkbe6CKMIxy8HnBwzSGuExFggsYZwFlSjLDRN0zKAtELHQujl\nOL9Hyp39i27xG/MNGj83tWjKR9Q0fAD7Bx5mY/r2emNknQffdzDDLBQW5wOmUWRH\nY3Q++YV8bAT7MlQtbmLCZ4AypMNIwimQ2bnBAoGAAMjaTqJd5ImroiV3+oaSE9Z9\n3loErQuaKsU0UG3aYAoUSICBdIfdZnJ9QlbWB8Y69dEtszZdTPt5YoOXSDa6m+6K\nVLY9SYkYfc8QK9S2BFul2kMIWthQFBDlCTK3AfK5nsbMOwp6aE6DKo+jkl1zvAGZ\nr6Xf+1hKSuMijPJN0ms=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-79ew9@basefirebase-a565e.iam.gserviceaccount.com",
        "client_id": "114375366118547783187",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-79ew9%40basefirebase-a565e.iam.gserviceaccount.com"
      },
    fileSystem: {
        path: './DB'
    }
}