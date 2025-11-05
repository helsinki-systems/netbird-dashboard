import { getOperatingSystem } from "@hooks/useOperatingSystem";
import dayjs from "dayjs";
import { OperatingSystem } from "@/interfaces/OperatingSystem";
import { NetbirdRelease } from "@/interfaces/Version";

const GITHUB_API_ENDPOINT = "https://api.github.com";
const LATEST_RELEASE_CHECK_INTERVAL_IN_MINUTES = 10;

export const getLatestNetbirdRelease = async (
  release?: NetbirdRelease,
): Promise<NetbirdRelease | undefined> => {
  return undefined;
};

export const parseVersionString = (version: string | undefined) => {
  if (!version) return -1;
  return parseInt(version.replace(/\D/g, ""));
};

/**
 * Check if peer as routing peer is supported by the provided version and operating system.
 * Routing peers are supported on Windows, macOS, iOS & Android starting from NetBird v0.36.6+.
 * @param version
 * @param os
 */
export const isRoutingPeerSupported = (version: string, os: string) => {
  const operatingSystem = getOperatingSystem(os);
  if (operatingSystem == OperatingSystem.LINUX) return true;
  if (version == "development") return true;
  const versionNumber = parseVersionString(version);
  return versionNumber >= 366;
};

/**
 * Check if native SSH is supported
 * @param version
 */
export const isNativeSSHSupported = (version: string) => {
  if (version == "development") return true;
  const versionNumber = parseVersionString(version);
  return versionNumber >= 999;
};
