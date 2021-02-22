using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Auto.Size.Sheet.RNAutoSizeSheet
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNAutoSizeSheetModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNAutoSizeSheetModule"/>.
        /// </summary>
        internal RNAutoSizeSheetModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNAutoSizeSheet";
            }
        }
    }
}
