import { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    name: "Ritmo",
    slug: "ritmo",
    scheme: "ritmo",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "automatic",

    icon: "./assets/images/icon.png",
    splash: {
        image: "./assets/images/splash-icon.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff",
    },

    assetBundlePatterns: ["**/*"],

    ios: {
        supportsTablet: true,
        bundleIdentifier: "com.ozgedev.ritmo",
    },

    android: {
        package: "com.ozgedev.ritmo",
        adaptiveIcon: {
            foregroundImage: "./assets/images/adaptive-icon.png",
            backgroundColor: "#ffffff",
        },
    },

    web: {
        bundler: "metro",
    },

    locales: {
        en: "./lib/i18n/locales/en.json",
        tr: "./lib/i18n/locales/tr.json"
    },

    plugins: [
        "expo-router",
        [
            "expo-localization",
            {
                "supportedLocales": {
                    "ios": ["en", "tr"],
                    "android": ["en", "tr"]
                }
            }
        ]
    ],

    experiments: {
        typedRoutes: true,
    },
});
