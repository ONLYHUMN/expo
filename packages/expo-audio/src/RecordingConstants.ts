import { IOSOutputFormat, type RecordingOptions, AudioQuality } from './Audio.types';

const HIGH_QUALITY: RecordingOptions = {
  extension: '.m4a',
  sampleRate: 44100,
  numberOfChannels: 2,
  bitRate: 128000,
  android: {
    outputFormat: 'mpeg4',
    audioEncoder: 'aac',
  },
  ios: {
    outputFormat: IOSOutputFormat.MPEG4AAC,
    audioQuality: AudioQuality.MAX,
    linearPCMBitDepth: 16,
    linearPCMIsBigEndian: false,
    linearPCMIsFloat: false,
  },
  web: {
    mimeType: 'audio/webm',
    bitsPerSecond: 128000,
  },
};

const LOW_QUALITY: RecordingOptions = {
  extension: '.m4a',
  sampleRate: 44100,
  numberOfChannels: 2,
  bitRate: 64000,
  android: {
    extension: '.3gp',
    outputFormat: '3gp',
    audioEncoder: 'amr_nb',
  },
  ios: {
    audioQuality: AudioQuality.MIN,
    outputFormat: IOSOutputFormat.MPEG4AAC,
    linearPCMBitDepth: 16,
    linearPCMIsBigEndian: false,
    linearPCMIsFloat: false,
  },
  web: {
    mimeType: 'audio/webm',
    bitsPerSecond: 128000,
  },
};

/**
 * Constant which contains definitions of the two preset examples of `RecordingOptions`, as implemented in the Audio SDK.
 *
 * # `HIGH_QUALITY`
 * ```ts
 * RecordingPresets.HIGH_QUALITY = {
 *  extension: '.m4a',
 *   sampleRate: 44100,
 *   numberOfChannels: 2,
 *   bitRate: 128000,
 *   android: {
 *     outputFormat: 'mpeg4',
 *     audioEncoder: 'aac',
 *   },
 *   ios: {
 *     outputFormat: IOSOutputFormat.MPEG4AAC,
 *     audioQuality: AudioQuality.MAX,
 *     linearPCMBitDepth: 16,
 *     linearPCMIsBigEndian: false,
 *     linearPCMIsFloat: false,
 *   },
 *   web: {
 *     mimeType: 'audio/webm',
 *     bitsPerSecond: 128000,
 *   },
 * };
 * ```
 *
 * # `LOW_QUALITY`
 * ```ts
 * RecordingPresets.LOW_QUALITY = {
 *   extension: '.m4a',
 *   sampleRate: 44100,
 *   numberOfChannels: 2,
 *   bitRate: 64000,
 *   android: {
 *     extension: '.3gp',
 *     outputFormat: '3gp',
 *     audioEncoder: 'amr_nb',
 *   },
 *   ios: {
 *     audioQuality: AudioQuality.MIN,
 *     outputFormat: IOSOutputFormat.MPEG4AAC,
 *     linearPCMBitDepth: 16,
 *     linearPCMIsBigEndian: false,
 *     linearPCMIsFloat: false,
 *   },
 *   web: {
 *     mimeType: 'audio/webm',
 *     bitsPerSecond: 128000,
 *   },
 * };
 * ```
 */
export const RecordingPresets: Record<string, RecordingOptions> = {
  HIGH_QUALITY,
  LOW_QUALITY,
};
