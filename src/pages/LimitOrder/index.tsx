import React from 'react'
import { GelatoLimitOrderPanel } from '@gelatonetwork/limit-orders-react'

export default function LimitOrder() {
  // const loadedUrlParams = useDefaultsFromURLSearch()

  // const state = useSelector((state) => state)
  // console.log('state', state)
  // // token warning stuff
  // const [loadedInputCurrency, loadedOutputCurrency] = [
  //   useCurrency(loadedUrlParams?.inputCurrencyId),
  //   useCurrency(loadedUrlParams?.outputCurrencyId),
  // ]
  // const [dismissTokenWarning, setDismissTokenWarning] = useState<boolean>(false)
  // const urlLoadedTokens: Token[] = useMemo(
  //   () => [loadedInputCurrency, loadedOutputCurrency]?.filter((c): c is Token => c?.isToken ?? false) ?? [],
  //   [loadedInputCurrency, loadedOutputCurrency]
  // )
  // const handleConfirmTokenWarning = useCallback(() => {
  //   setDismissTokenWarning(true)
  // }, [])

  // // dismiss warning if all imported tokens are in active lists
  // const defaultTokens = useAllTokens()
  // const importTokensNotInDefault =
  //   urlLoadedTokens &&
  //   urlLoadedTokens.filter((token: Token) => {
  //     return !Boolean(token.address in defaultTokens)
  //   })

  // const { account, chainId, library } = useActiveWeb3React()
  // const theme = useContext(ThemeContext)

  // const recipient = account ?? null

  // const {
  //   handlers: { handleInput, handleRateType, handleCurrencySelection, handleSwitchTokens },
  //   derivedOrderInfo: {
  //     parsedAmounts,
  //     formattedAmounts,
  //     currencies,
  //     currencyBalances,
  //     trade,
  //     inputError,
  //     allowedSlippage,
  //     realExecutionRate,
  //   },
  //   gasPrice,
  //   orderState: { typedValue, independentField, rateType },
  // } = useGelatoLimitOrders()

  // // toggle wallet when disconnected
  // const toggleWalletModal = useWalletModalToggle()

  // // for expert mode
  // const [isExpertMode] = useExpertModeManager()

  // const { address: recipientAddress } = useENSAddress(account)

  // const fiatValueInput = useUSDCValue(parsedAmounts[Field.INPUT])
  // const fiatValueOutput = useUSDCValue(parsedAmounts[Field.OUTPUT])
  // const desiredRateInCurrencyAmount = tryParseAmount(trade?.outputAmount.toSignificant(6), currencies[Field.OUTPUT])

  // const fiatValueDesiredRate = useUSDCValue(desiredRateInCurrencyAmount)
  // const priceImpact = computeFiatValuePriceImpact(fiatValueInput, fiatValueOutput)
  // const currentMarketRate = trade?.executionPrice.toSignificant(6) ?? undefined

  // const isValid = !inputError
  // // const dependentField: Field =
  // //   independentField === Field.INPUT || independentField === Field.DESIRED_RATE ? Field.OUTPUT : Field.INPUT

  // const handleTypeInput = useCallback(
  //   (value: string) => {
  //     handleInput(Field.INPUT, value)
  //   },
  //   [handleInput]
  // )
  // const handleTypeOutput = useCallback(
  //   (value: string) => {
  //     handleInput(Field.OUTPUT, value)
  //   },
  //   [handleInput]
  // )
  // const handleTypeDesiredRate = useCallback(
  //   (value: string) => {
  //     handleInput(Field.DESIRED_RATE, value)
  //   },
  //   [handleInput]
  // )

  // // reset if they close warning without tokens in params
  // const handleDismissTokenWarning = useCallback(() => {
  //   setDismissTokenWarning(true)
  //   history.push('/limit-order/')
  // }, [history])

  // // modal and loading
  // const [{ showConfirm, tradeToConfirm, swapErrorMessage, attemptingTxn, txHash }, setSwapState] = useState<{
  //   showConfirm: boolean
  //   tradeToConfirm: V2Trade<Currency, Currency, TradeType> | V3Trade<Currency, Currency, TradeType> | undefined
  //   attemptingTxn: boolean
  //   swapErrorMessage: string | undefined
  //   txHash: string | undefined
  // }>({
  //   showConfirm: false,
  //   tradeToConfirm: undefined,
  //   attemptingTxn: false,
  //   swapErrorMessage: undefined,
  //   txHash: undefined,
  // })

  // // const formattedAmounts = {
  // //   [independentField]: typedValue,
  // //   [dependentField]:
  // //     showWrap && (independentField === Field.INPUT || independentField === Field.OUTPUT)
  // //       ? parsedAmounts[independentField]?.toExact() ?? ''
  // //       : parsedAmounts[dependentField]?.toSignificant(6) ?? '',
  // //   // Overrides independent value when equal to DESIRED_RATE
  // //   [Field.DESIRED_RATE]: parsedAmounts[Field.DESIRED_RATE]?.toSignificant(6) ?? '',
  // // }

  // // formattedAmounts[Field.DESIRED_RATE] =
  // //   independentField === Field.DESIRED_RATE && formattedAmounts[Field.DESIRED_RATE] === ''
  // //     ? typedValue
  // //     : formattedAmounts[Field.DESIRED_RATE]

  // // formattedAmounts[Field.INPUT] =
  // //   dependentField !== Field.INPUT && independentField !== Field.INPUT && inputAmount
  // //     ? inputAmount!.toSignificant(6)
  // //     : formattedAmounts[Field.INPUT]

  // const userHasSpecifiedInputOutput = Boolean(
  //   (independentField === Field.INPUT || independentField === Field.OUTPUT) &&
  //     currencies[Field.INPUT] &&
  //     currencies[Field.OUTPUT]
  //   // &&
  //   // parsedAmounts[independentField]?.greaterThan(JSBI.BigInt(0))
  // )
  // const routeNotFound = !trade?.route
  // const isLoadingRoute = parsedAmounts[Field.INPUT] && !trade //V3TradeState.LOADING === v3TradeState

  // // check whether the user has approved the router on the input token
  // // const [approvalState, approveCallback] = useApproveCallbackFromTrade(trade, allowedSlippage)
  // // const { state: signatureState, signatureData, gatherPermitSignature } = useERC20PermitFromTrade(
  // //   trade,
  // //   allowedSlippage
  // // )

  // //const handleApprove = useCallback(async () => {
  // //   if (signatureState === UseERC20PermitState.NOT_SIGNED && gatherPermitSignature) {
  // //     try {
  // //       await gatherPermitSignature()
  // //     } catch (error) {
  // //       // try to approve if gatherPermitSignature failed for any reason other than the user rejecting it
  // //       if (error?.code !== 4001) {
  // //         await approveCallback()
  // //       }
  // //     }
  // //   } else {
  // //     await approveCallback()
  // //   }
  // // }, [approveCallback, gatherPermitSignature, signatureState])

  // // const handleRateType = useCallback(async () => {
  // //   if (independentField === Field.DESIRED_RATE) {
  // //     if (rateType === Rate.MUL) {
  // //       const flipped =
  // //         parsedAmounts[Field.INPUT] && parsedAmounts[Field.OUTPUT] && currencies[Field.OUTPUT]
  // //           ? parsedAmounts[Field.INPUT]
  // //               ?.divide(parsedAmounts[Field.OUTPUT]!.asFraction)
  // //               ?.multiply(JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(currencies[Field.OUTPUT]!.decimals)))
  // //               ?.toSignificant(6)
  // //           : undefined

  // //       setRateType(Rate.DIV)
  // //       if (flipped) onUserInput(Field.DESIRED_RATE, flipped)
  // //     } else {
  // //       const flipped =
  // //         parsedAmounts[Field.INPUT] && parsedAmounts[Field.OUTPUT] && currencies[Field.OUTPUT]
  // //           ? parsedAmounts[Field.OUTPUT]
  // //               ?.divide(parsedAmounts[Field.INPUT]!.asFraction)
  // //               ?.multiply(JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(currencies[Field.INPUT]!.decimals)))
  // //               ?.toSignificant(6)
  // //           : undefined

  // //       setRateType(Rate.MUL)
  // //       if (flipped) onUserInput(Field.DESIRED_RATE, flipped)
  // //     }
  // //   } else {
  // //     setRateType(rateType === Rate.MUL ? Rate.DIV : Rate.MUL)
  // //   }
  // // }, [rateType, onUserInput, independentField, currencies, parsedAmounts])

  // // check if user has gone through approval process, used to show two step buttons, reset on token change
  // const [approvalSubmitted, setApprovalSubmitted] = useState<boolean>(false)

  // // mark when a user has submitted an approval, reset onTokenSelection for input field
  // // useEffect(() => {
  // //   if (approvalState === ApprovalState.PENDING) {
  // //     setApprovalSubmitted(true)
  // //   }
  // // }, [approvalState, approvalSubmitted])

  // const maxInputAmount: CurrencyAmount<Currency> | undefined = maxAmountSpend(currencyBalances[Field.INPUT])
  // const showMaxButton = Boolean(maxInputAmount?.greaterThan(0) && !parsedAmounts[Field.INPUT]?.equalTo(maxInputAmount))

  // // the callback to execute the swap
  // const { callback: swapCallback, error: swapCallbackError } = useSwapCallback(
  //   trade as any,
  //   allowedSlippage,
  //   recipient,
  //   undefined
  // )

  // const [singleHopOnly] = useUserSingleHopOnly()

  // const handleSwap = useCallback(() => {
  //   if (!swapCallback) {
  //     return
  //   }
  //   if (priceImpact && !confirmPriceImpactWithoutFee(priceImpact)) {
  //     return
  //   }
  //   setSwapState({ attemptingTxn: true, tradeToConfirm, showConfirm, swapErrorMessage: undefined, txHash: undefined })
  //   swapCallback()
  //     .then((hash) => {
  //       setSwapState({ attemptingTxn: false, tradeToConfirm, showConfirm, swapErrorMessage: undefined, txHash: hash })

  //       ReactGA.event({
  //         category: 'LimitOrder',
  //         action:
  //           recipient === null
  //             ? 'LimitOrder w/o Send'
  //             : (recipientAddress ?? recipient) === account
  //             ? 'LimitOrder w/o Send + recipient'
  //             : 'LimitOrder w/ Send',
  //         label: [
  //           trade?.inputAmount?.currency?.symbol,
  //           trade?.outputAmount?.currency?.symbol,
  //           getTradeVersion(trade as any),
  //           singleHopOnly ? 'SH' : 'MH',
  //         ].join('/'),
  //       })
  //     })
  //     .catch((error) => {
  //       setSwapState({
  //         attemptingTxn: false,
  //         tradeToConfirm,
  //         showConfirm,
  //         swapErrorMessage: error.message,
  //         txHash: undefined,
  //       })
  //     })
  // }, [
  //   priceImpact,
  //   swapCallback,
  //   tradeToConfirm,
  //   showConfirm,
  //   recipient,
  //   recipientAddress,
  //   account,
  //   trade,
  //   singleHopOnly,
  // ])

  // // errors
  // const [showInverted, setShowInverted] = useState<boolean>(false)

  // // warnings on the greater of fiat value price impact and execution price impact
  // const priceImpactSeverity = useMemo(() => {
  //   const executionPriceImpact = trade?.priceImpact
  //   return warningSeverity(
  //     executionPriceImpact && priceImpact
  //       ? executionPriceImpact.greaterThan(priceImpact)
  //         ? executionPriceImpact
  //         : priceImpact
  //       : executionPriceImpact ?? priceImpact
  //   )
  // }, [priceImpact, trade])

  // const handleConfirmDismiss = useCallback(() => {
  //   setSwapState({ showConfirm: false, tradeToConfirm, attemptingTxn, swapErrorMessage, txHash })
  //   // if there was a tx hash, we want to clear the input
  //   if (txHash) {
  //     handleInput(Field.INPUT, '')
  //   }
  // }, [attemptingTxn, handleInput, swapErrorMessage, tradeToConfirm, txHash])

  // const handleAcceptChanges = useCallback(() => {
  //   setSwapState({ tradeToConfirm: trade as any, swapErrorMessage, txHash, attemptingTxn, showConfirm })
  // }, [attemptingTxn, showConfirm, swapErrorMessage, trade, txHash])

  // const handleInputSelect = useCallback(
  //   (inputCurrency) => {
  //     setApprovalSubmitted(false) // reset 2 step UI for approvals
  //     handleCurrencySelection(Field.INPUT, inputCurrency)
  //   },
  //   [handleCurrencySelection]
  // )

  // const handleMaxInput = useCallback(() => {
  //   maxInputAmount && handleInput(Field.INPUT, maxInputAmount.toExact())
  // }, [maxInputAmount, handleInput])

  // const handleOutputSelect = useCallback((outputCurrency) => handleCurrencySelection(Field.OUTPUT, outputCurrency), [
  //   handleCurrencySelection,
  // ])

  // const swapIsUnsupported = useIsSwapUnsupported(currencies?.INPUT, currencies?.OUTPUT)

  // const priceImpactTooHigh = priceImpactSeverity > 3 && !isExpertMode

  // console.log('priceImpact?.lessThan(JSBI.BigInt(0))', priceImpact?.lessThan(JSBI.BigInt(0)))
  // console.log('priceImpact', priceImpact?.toSignificant(6))

  // console.log('priceImpactSeverity', priceImpactSeverity)
  return (
    <>
      <GelatoLimitOrderPanel />
      {/* <TokenWarningModal
        isOpen={importTokensNotInDefault.length > 0 && !dismissTokenWarning}
        tokens={importTokensNotInDefault}
        onConfirm={handleConfirmTokenWarning}
        onDismiss={handleDismissTokenWarning}
      />
      <AppBody>
        <SwapHeader />
        <Wrapper id="limit-order-page">
          <ConfirmSwapModal
            isOpen={showConfirm}
            trade={trade as any}
            originalTrade={tradeToConfirm}
            onAcceptChanges={handleAcceptChanges}
            attemptingTxn={attemptingTxn}
            txHash={txHash}
            recipient={recipient}
            allowedSlippage={allowedSlippage}
            onConfirm={handleSwap}
            swapErrorMessage={swapErrorMessage}
            onDismiss={handleConfirmDismiss}
          />

          <AutoColumn gap={'md'}>
            <div style={{ display: 'relative' }}>
              <CurrencyInputPanel
                label={independentField === Field.OUTPUT ? 'From (at most)' : 'From'}
                value={formattedAmounts[Field.INPUT]}
                showMaxButton={showMaxButton}
                currency={currencies[Field.INPUT]}
                onUserInput={handleTypeInput}
                onMax={handleMaxInput}
                fiatValue={fiatValueInput ?? undefined}
                onCurrencySelect={handleInputSelect}
                otherCurrency={currencies[Field.OUTPUT]}
                showCommonBases={true}
                id="limit-order-currency-input"
              />
              <ArrowWrapper clickable>
                {rateType === Rate.MUL ? (
                  <X
                    size="16"
                    onClick={handleRateType}
                    color={currencies[Field.INPUT] && currencies[Field.OUTPUT] ? theme.text1 : theme.text3}
                  />
                ) : (
                  <Divide
                    size="16"
                    onClick={handleRateType}
                    color={currencies[Field.INPUT] && currencies[Field.OUTPUT] ? theme.text1 : theme.text3}
                  />
                )}
              </ArrowWrapper>
              <CurrencyInputPanel
                value={formattedAmounts[Field.DESIRED_RATE]}
                currentMarketRate={currentMarketRate}
                showMaxButton={showMaxButton}
                currency={currencies[Field.INPUT]}
                onUserInput={handleTypeDesiredRate}
                fiatValue={fiatValueDesiredRate ?? undefined}
                onCurrencySelect={handleInputSelect}
                otherCurrency={currencies[Field.OUTPUT]}
                showCommonBases={true}
                id="limit-order-currency-rate"
                showCurrencySelector={false}
                hideBalance={true}
                showRate={true}
                isInvertedRate={rateType === Rate.MUL ? false : true}
                realExecutionRate={realExecutionRate}
                gasPrice={gasPrice}
              />
              <ArrowWrapper clickable>
                <ArrowDown
                  size="16"
                  onClick={() => {
                    setApprovalSubmitted(false) // reset 2 step UI for approvals
                    handleSwitchTokens()
                  }}
                  color={currencies[Field.INPUT] && currencies[Field.OUTPUT] ? theme.text1 : theme.text3}
                />
              </ArrowWrapper>
              <CurrencyInputPanel
                value={formattedAmounts[Field.OUTPUT]}
                onUserInput={handleTypeOutput}
                label={independentField === Field.INPUT ? 'To (at least)' : 'To'}
                showMaxButton={false}
                hideBalance={false}
                fiatValue={fiatValueOutput ?? undefined}
                priceImpact={priceImpact}
                currency={currencies[Field.OUTPUT]}
                onCurrencySelect={handleOutputSelect}
                otherCurrency={currencies[Field.INPUT]}
                showCommonBases={true}
                id="limit-order-currency-output"
              />
            </div>
            {/* 
            {recipient !== null ? (
              <>
                <AutoRow justify="space-between" style={{ padding: '0 1rem' }}>
                  <ArrowWrapper clickable={false}>
                    <ArrowDown size="16" color={theme.text2} />
                  </ArrowWrapper>
                  <LinkStyledButton id="remove-recipient-button" onClick={() => onChangeRecipient(null)}>
                    - Remove send
                  </LinkStyledButton>
                </AutoRow>
                <AddressInputPanel id="recipient" value={recipient} onChange={onChangeRecipient} />
              </>
            ) : null} */}

      {/* <Row style={{ justifyContent: !trade ? 'center' : 'space-between' }}>
              <RowFixed>
                <ButtonGray
                  width="fit-content"
                  padding="0.1rem 0.5rem"
                  disabled
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '24px',
                    opacity: 0.4,
                    marginLeft: '0.25rem',
                  }}
                >
                  <TYPE.black fontSize={12}>Powered by Gelato🍦</TYPE.black>
                </ButtonGray>
              </RowFixed>
              {trade ? (
                <RowFixed>
                  <TradePrice
                    price={trade.executionPrice as any}
                    showInverted={showInverted}
                    setShowInverted={setShowInverted}
                  />
                  <MouseoverTooltipContent
                    content={<AdvancedSwapDetails trade={trade as any} allowedSlippage={allowedSlippage} />}
                  >
                    <StyledInfo />
                  </MouseoverTooltipContent>
                </RowFixed>
              ) : null}
            </Row>

            <BottomGrouping>
              {swapIsUnsupported ? (
                <ButtonPrimary disabled={true}>
                  <TYPE.main mb="4px">Unsupported Asset</TYPE.main>
                </ButtonPrimary>
              ) : !account ? (
                <ButtonLight onClick={toggleWalletModal}>Connect Wallet</ButtonLight>
              ) : routeNotFound && userHasSpecifiedInputOutput && parsedAmounts[Field.INPUT] ? (
                <GreyCard style={{ textAlign: 'center' }}>
                  <TYPE.main mb="4px">
                    {isLoadingRoute ? <Dots>Loading</Dots> : `Insufficient liquidity for this trade.`}
                  </TYPE.main>
                </GreyCard>
              ) : priceImpact?.greaterThan('0') ? (
                <GreyCard style={{ textAlign: 'center' }}>
                  <TYPE.main mb="4px">{`Only possible to place orders above market rate.`}</TYPE.main>
                </GreyCard>
              ) : ( 
                // <AutoRow style={{ flexWrap: 'nowrap', width: '100%' }}>
                //   <AutoColumn style={{ width: '100%' }} gap="12px">
                //     <ButtonConfirmed
                //       onClick={handleApprove}
                //       disabled={
                //         approvalState !== ApprovalState.NOT_APPROVED ||
                //         approvalSubmitted ||
                //         signatureState === UseERC20PermitState.SIGNED
                //       }
                //       width="100%"
                //       altDisabledStyle={approvalState === ApprovalState.PENDING} // show solid button while waiting
                //       confirmed={
                //         approvalState === ApprovalState.APPROVED || signatureState === UseERC20PermitState.SIGNED
                //       }
                //     >
                //       <AutoRow justify="space-between" style={{ flexWrap: 'nowrap' }}>
                //         <span style={{ display: 'flex', alignItems: 'center' }}>
                //           <CurrencyLogo
                //             currency={currencies[Field.INPUT]}
                //             size={'20px'}
                //             style={{ marginRight: '8px', flexShrink: 0 }}
                //           />
                //           {/* we need to shorten this string on mobile 
                //           {approvalState === ApprovalState.APPROVED || signatureState === UseERC20PermitState.SIGNED
                //             ? 'You can now trade ' + currencies[Field.INPUT]?.symbol
                //             : 'Allow the Uniswap Protocol to use your ' + currencies[Field.INPUT]?.symbol}
                //         </span>
                //         {approvalState === ApprovalState.PENDING ? (
                //           <Loader stroke="white" />
                //         ) : (approvalSubmitted && approvalState === ApprovalState.APPROVED) ||
                //           signatureState === UseERC20PermitState.SIGNED ? (
                //           <CheckCircle size="20" color={theme.green1} />
                //         ) : (
                //           <MouseoverTooltip
                //             text={
                //               'You must give the Uniswap smart contracts permission to use your ' +
                //               currencies[Field.INPUT]?.symbol +
                //               '. You only have to do this once per token.'
                //             }
                //           >
                //             <HelpCircle size="20" color={'white'} style={{ marginLeft: '8px' }} />
                //           </MouseoverTooltip>
                //         )}
                //       </AutoRow>
                //     </ButtonConfirmed>
                //     <ButtonError
                //       onClick={() => {
                //         if (isExpertMode) {
                //           handleSwap()
                //         } else {
                //           setSwapState({
                //             tradeToConfirm: trade,
                //             attemptingTxn: false,
                //             swapErrorMessage: undefined,
                //             showConfirm: true,
                //             txHash: undefined,
                //           })
                //         }
                //       }}
                //       width="100%"
                //       id="limit-order-button"
                //       disabled={
                //         !isValid ||
                //         (approvalState !== ApprovalState.APPROVED && signatureState !== UseERC20PermitState.SIGNED) ||
                //         priceImpactTooHigh
                //       }
                //       error={isValid && priceImpactSeverity > 2}
                //     >
                //       <Text fontSize={16} fontWeight={500}>
                //         {priceImpactTooHigh ? `High Price Impact` : `Swap${priceImpactSeverity > 2 ? ' Anyway' : ''}`}
                //       </Text>
                //     </ButtonError>
                //   </AutoColumn>
                // </AutoRow>
                // )
      //           <ButtonError
      //             onClick={() => {
      //               if (isExpertMode) {
      //                 handleSwap()
      //               } else {
      //                 setSwapState({
      //                   tradeToConfirm: trade as any,
      //                   attemptingTxn: false,
      //                   swapErrorMessage: undefined,
      //                   showConfirm: true,
      //                   txHash: undefined,
      //                 })
      //               }
      //             }}
      //             id="limit-order-button"
      //             disabled={!isValid || priceImpactTooHigh || !!swapCallbackError}
      //             error={isValid && priceImpactSeverity > 2 && !swapCallbackError}
      //           >
      //             <Text fontSize={20} fontWeight={500}>
      //               {inputError ? inputError : priceImpactTooHigh ? `Price Impact Too High` : `Place order`}
      //             </Text>
      //           </ButtonError>
      //         )}
      //         {isExpertMode && swapErrorMessage ? <SwapCallbackError error={swapErrorMessage} /> : null}
      //       </BottomGrouping>
      //     </AutoColumn>
      //   </Wrapper>
      // </AppBody>

      // <LimitOrdersHistory />
      // {!swapIsUnsupported ? null : (
      //   <UnsupportedCurrencyFooter show={swapIsUnsupported} currencies={[currencies.INPUT, currencies.OUTPUT]} />
      // )} */}
    </>
  )
}
