import { useState } from "react";
import { View } from "react-native";
import { styles } from "./SpinnerOverlay.style";
import Spinner from "react-native-loading-spinner-overlay";

export default function SpinnerOverlay({ component = null, style = null }) {
    const [loading, setLoading] = useState(true);

    return (
        <View style={style}>
            <Spinner
                visible={true}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
            />
        </View>
    )
}