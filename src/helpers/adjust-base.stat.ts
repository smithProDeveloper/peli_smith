export function adjustBaseStat(baseStat: number) {
    if (baseStat > 90) {
        return 90;
    }
    return baseStat;
}