import admin, { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
// import fbConfig from "./fbConfig";

// const serviceAccountKey = "./serviceAccountKey.json";

const app = initializeApp({
  credential: cert({
    projectId: "react-crud-37608",
    privateKey:
      "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDIHQ0sZ7oRTRsu\nBDW2mnHKZiuWYvPJGJS+fJSgHesMMTwa1ZtZGdtXC4ctNaULSGl1Hg6zKB8XA/br\n3lsccD95sA46luOgISx5VWiOQkTdAZ0yckGd1138zyQgioPC7sSH3gSHZzJFOf5d\nDpEPnxu8SZ8rgEU1heAq4SR3vEUs1Yj5uPuS0sPTPz3wBxPLlLKlfxI5oggkYU4C\nMw1+jUb7D53iLmAXwF+cg4EC0JyX6AhFnAhLqy0xIQLaHcAE6FlrxEHINakcgBv8\ncn43VlVuyOJt5rne/FZmBqinJ00Hssn04hieO5JTiWdkQ1RC9WGC5E3ZX+eEkBQw\n/y32iP2dAgMBAAECggEAFxcTEA6f76MgAb1GnV1Qx/PmD6I3UvrdHuWtGJSbLHr5\n3nbLSAqtvmt8G4FXG+gtEvB27cExZSx1711m0e85w8bGvYfvl+h8AzwRpmiLHZ00\nEEASxi21kJguKPsSnQmD79F0YFNN/6LjcMVfg5fuUVmFXjWcxsI9zXTRCmfU64k7\nwYkbs+XmCsY8B31AkeuoWT6FD4O8dbdz9dXNWTp2SMGnDFXDeuNjNUeckTu09bp5\nYreYdiWt9Zd+29B8mvgS7GAJM+kEE81EtR99XcU/LDfZr5Vdpawm69hMwiXgd/VB\n8TYfSy1VsaQh5FWD/8XKh3gzScgUg2aMIgXQMDojwQKBgQDw0Q/fOYkMPuFDZGfB\nrhsvSETOPupHCXJqvkTD9uWxexVt7n6RY7IcY3kzvKL+vBo17Vu5IGXwotu6ZwWX\nH5CEr6m/oBq2J45SLMyazjinpCXzK0v7H6r3R9LtDNIFU50ik5+1bJcNAIE8BKIA\nPG8m/QaHaeLSH9b20ZfEIjFFZQKBgQDUuwOGeq5U6GHPj5LcVUHqp4paQPh7qAmT\nQoRafU1HhygIEqtG/x0E+j+GUo8tAp6GRP09TZfV3nRBonGWIChN6j9Jn4hufowT\nQoo/UGHT7b3inj58j/9bu5RUiafcmL2AtBAQaXrIqOPk8Um0Qtu7dkTd/4XOyuy5\nJabZAL9P2QKBgQCiOeP8V7EIK8/qa1guNFCh4IhhfCaspiOK3xRKAygnEKiV/uUK\nomOZFjXO8ZPIEQWDMJvqsXWazstA3if4702W5RNwQLXd4fXRS9alrqih3kWmc5Ni\n36l3nc3s3QcaiYJAibw8JqP3IVDuEpzjldK3LBra3Cztqn9QlE8t1G7mtQKBgQCV\nxZlEzAkDNJzwonfWcpw3FoAc7RNFFFixeipu/zsyeeDgViyKjsCiqYGiE2xEV0y+\n4cGdsIyPAdC+CR2Jgdh+isbGEfDfQm9ie/2TeAd4SzDeZWU/E67IqfdT0ZsCf/Mj\nsyKAO5M7xVS18n9ez5eekzUHS4iswEgMTor6y0DmeQKBgQCq5JoiPydiVdbKUbmO\n///63y9qmESd3JkXc7nnqB3s9u7GHZHmwwej91AqWcRbNez5nG1MFDI59LvJP9u3\n0inkgi+FwGUhTlmsYOTMDaaiPLzdwfsBG+BiplQCKxRCvxjKFiVuUrgkGdk2R/2p\n1ewq4kbIoZd10LJM00bru23tQA==\n-----END PRIVATE KEY-----\n",
    clientEmail:
      "firebase-adminsdk-2rxeh@react-crud-37608.iam.gserviceaccount.com",
  }),
});

const auth = getAuth(app);
export default auth;
