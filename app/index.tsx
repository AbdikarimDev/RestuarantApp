// app/index.tsx
import * as Nativewind from "nativewind";
import { Text, View } from "react-native";

// Runtime check + safe fallback so the app doesn't crash if `styled` is missing
console.log("nativewind module:", Nativewind);
console.log("nativewind.styled:", (Nativewind as any)?.styled);

const nativewindAvailable = !!(Nativewind && (Nativewind as any).styled);
const StyledView = nativewindAvailable
  ? (Nativewind as any).styled(View)
  : View;
const StyledText = nativewindAvailable
  ? (Nativewind as any).styled(Text)
  : Text;

export default function Home() {
  // ✅ Change from "App" to "Home"
  return (
    <View className="flex-1 justify-center items-center bg-red-500">
      <Text className="text-white text-2xl font-bold">Hello Tailwind!</Text>

      {/* Debug area: styled helper */}
      <StyledView className="mt-6 p-4 rounded-md bg-blue-500 border-2 border-[green] ">
        <StyledText className="text-[#e40e0e]">Styled helper works</StyledText>
      </StyledView>

      {/* Diagnostic text using inline style to show availability */}
      <View style={{ marginTop: 16 }}>
        <Text style={{ color: "#e40e0e" }}>
          nativewindAvailable: {String(nativewindAvailable)}
        </Text>
      </View>

      {/* Debug area: inline style for comparison */}
      <View
        style={{
          marginTop: 16,
          padding: 12,
          borderRadius: 8,
          backgroundColor: "green",
        }}
      >
        <Text style={{ color: "#fff" }}>Inline style (green) — control</Text>
      </View>
    </View>
  );
}
